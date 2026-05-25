import React, { useState, useMemo, useEffect, useRef } from 'react';
import { UploadCloud, Download, X } from 'lucide-react';
import { CodedButton } from '../ui/CodedButton';
import { FormInput } from '../ui/FormInput';
import { ReadOnlyField } from '../ui/ReadOnlyField';
import { ExpenseLine, ExpenseLineSimple } from '../ui/ExpenseLine';
import { auth, storage } from '../../firebase';
import { ref as storageRef, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import logger from '../../utils/logger';

const initialFormState = {
  numero: '',
  date: new Date().toISOString().split('T')[0],
  motifId: '',
  expenseType: 'forfait',
  km: '',
  trajetId: '',
  locationVoiture: '',
  carburant: '',
  avion: '',
  train: '',
  repas: '',
  transportCommun: '',
  parking: '',
  peage: '',
  peageSurcout: '',
  hotelForfait: '',
  hotelReel: '',
  montantRecuIndemnite: '',
  montantRecuKm: '',
  montantRecuPeage: '',
  montantRecuReel: '',
  montantRecuHotelForfait: '',
  montantRecuHotelReel: '',
};

const formatCurrency = (amount) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(amount || 0);
const formatFileSize = (bytes) => {
  if (!bytes && bytes !== 0) return '';
  const thresh = 1024;
  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }
  const units = ['KB', 'MB', 'GB', 'TB'];
  let u = -1;
  do {
    bytes /= thresh;
    ++u;
  } while (Math.abs(bytes) >= thresh && u < units.length - 1);
  return bytes.toFixed(1) + ' ' + units[u];
};

export const ConvocationForm = ({ motifs, trajets, onAddConvocation, onClose, onGoToSettings, convocationToEdit, onUpdateConvocation }) => {
  const sortedMotifs = useMemo(() => [...motifs].sort((a, b) => a.nom.localeCompare(b.nom, 'fr', { sensitivity: 'base' })), [motifs]);

  const [formData, setFormData] = useState(() => {
    if (!convocationToEdit) {
      return { ...initialFormState, motifId: sortedMotifs.length > 0 ? sortedMotifs[0].id : '' };
    }

    const depenses = Array.isArray(convocationToEdit.depenses) ? convocationToEdit.depenses : [];
    const indemnite = depenses.find(d => d.nom === 'Indemnité');
    const peage = depenses.find(d => d.nom === 'Péage');
    const kmForfait = depenses.find(d => d.nom === 'Frais Kilométriques');
    const reelTotal = depenses.find(d => d.nom === 'Total Frais Réels');
    const hotelForfait = depenses.find(d => d.nom === 'Hôtel (Forfait)');
    const hotelReel = depenses.find(d => d.nom === 'Hôtel (Réel)');

    return {
      numero: convocationToEdit.numero,
      date: convocationToEdit.date,
      motifId: convocationToEdit.motifId,
      expenseType: convocationToEdit.expenseType,
      km: convocationToEdit.km === 'N/A' ? '' : convocationToEdit.km,
      trajetId: convocationToEdit.trajetId || '',
      locationVoiture: convocationToEdit.detailsReel?.locationVoiture || '',
      carburant: convocationToEdit.detailsReel?.carburant || '',
      avion: convocationToEdit.detailsReel?.avion || '',
      train: convocationToEdit.detailsReel?.train || '',
      repas: convocationToEdit.detailsReel?.repas || '',
      transportCommun: convocationToEdit.detailsReel?.transportCommun || '',
      parking: convocationToEdit.detailsReel?.parking || '',
      peage: peage?.du || '',
      peageSurcout: convocationToEdit.detailsReel?.peageSurcout || '',
      hotelForfait: hotelForfait?.du || '',
      hotelReel: hotelReel?.du || '',
      montantRecuIndemnite: indemnite?.recu || '',
      montantRecuKm: kmForfait?.recu || '',
      montantRecuPeage: peage?.recu || '',
      montantRecuReel: reelTotal?.recu || '',
      montantRecuHotelForfait: hotelForfait?.recu || '',
      montantRecuHotelReel: hotelReel?.recu || '',
    };
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(null);
  const [uploadError, setUploadError] = useState(null);
  const fileInputRef = useRef(null);
  const hasMotifs = motifs.length > 0;

  const montantsDus = useMemo(() => {
    const motif = motifs.find(m => m.id === formData.motifId);
    if (!motif) {
      return { indemniteDue: 0, coutKmDu: 0 };
    }

    const indemniteDue = motif.indemnite;
    let coutKmDu = 0;

    if (formData.expenseType === 'forfait') {
      const km = parseFloat(formData.km) || 0;
      const kmArrondis = Math.ceil(km);
      const plafondKm = motif.plafondKm;
      const coeffKm = motif.coeffKm;
      const kmCalcules = plafondKm > 0 && kmArrondis > plafondKm ? plafondKm : kmArrondis;
      coutKmDu = Math.round(kmCalcules * coeffKm * 100) / 100;
    }

    return { indemniteDue, coutKmDu };
  }, [formData.km, formData.motifId, formData.expenseType, motifs]);

  const reelCalculations = useMemo(() => {
    if (formData.expenseType !== 'reel') {
      return { totalReelDu: 0, kmADeclarer: 0, coutTrajetDu: 0 };
    }

    const motif = motifs.find(m => m.id === formData.motifId);
    const coeffKm = motif?.coeffKm || 0;
    const trajet = trajets.find(t => t.id === formData.trajetId);
    const distanceTrajet = trajet?.distance || 0;
    const rawCoutTrajetDu = distanceTrajet * coeffKm;

    const locationVoiture = parseFloat(formData.locationVoiture) || 0;
    const carburant = parseFloat(formData.carburant) || 0;
    const avion = parseFloat(formData.avion) || 0;
    const train = parseFloat(formData.train) || 0;
    const repas = parseFloat(formData.repas) || 0;
    const transportCommun = parseFloat(formData.transportCommun) || 0;
    const parking = parseFloat(formData.parking) || 0;
    const peageSurcout = parseFloat(formData.peageSurcout) || 0;

    const totalDeplacementsReels = locationVoiture + carburant + avion + train + peageSurcout + repas + transportCommun + parking;
    const rawTotalReelDu = totalDeplacementsReels + rawCoutTrajetDu;
    const rawTotalPourKm = totalDeplacementsReels + rawCoutTrajetDu;
    const kmADeclarer = coeffKm > 0 ? Math.ceil(rawTotalPourKm / coeffKm) : 0;
    const coutTrajetDu = Math.round(rawCoutTrajetDu * 100) / 100;
    const totalReelDu = Math.round(rawTotalReelDu * 100) / 100;

    return { totalReelDu, kmADeclarer, coutTrajetDu };
  }, [formData.expenseType, formData.motifId, formData.trajetId, formData.locationVoiture, formData.carburant, formData.avion, formData.train, formData.repas, formData.transportCommun, formData.parking, formData.peageSurcout, motifs, trajets]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (!sortedMotifs.length) return;
    if (!formData.motifId || !sortedMotifs.some((motif) => motif.id === formData.motifId)) {
      setFormData((prev) => ({ ...prev, motifId: sortedMotifs[0].id }));
    }
  }, [sortedMotifs, formData.motifId]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.numero.trim()) newErrors.numero = 'Le numéro est requis.';
    if (!formData.date) newErrors.date = 'La date est requise.';
    if (!formData.motifId) newErrors.motifId = 'Le motif est requis.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm() || isSubmitting) return;
    setIsSubmitting(true);
    setErrors(prev => ({ ...prev, form: null }));

    try {
      const motif = motifs.find(m => m.id === formData.motifId);
      const trajet = trajets.find(t => t.id === formData.trajetId);
      const { indemniteDue, coutKmDu } = montantsDus;

      const depenses = [{ nom: 'Indemnité', du: indemniteDue, recu: parseFloat(formData.montantRecuIndemnite) || 0 }];

      if (formData.expenseType === 'reel') {
        if (parseFloat(formData.peage) > 0) {
          depenses.push({ nom: 'Péage', du: parseFloat(formData.peage) || 0, recu: parseFloat(formData.montantRecuPeage) || 0 });
        }
        depenses.push({ nom: 'Total Frais Réels', du: reelCalculations.totalReelDu, recu: parseFloat(formData.montantRecuReel) || 0 });
        if (parseFloat(formData.hotelReel) > 0) {
          depenses.push({ nom: 'Hôtel (Réel)', du: parseFloat(formData.hotelReel) || 0, recu: parseFloat(formData.montantRecuHotelReel) || 0 });
        }
      } else {
        depenses.push({ nom: 'Péage', du: parseFloat(formData.peage) || 0, recu: parseFloat(formData.montantRecuPeage) || 0 });
        depenses.push({ nom: 'Frais Kilométriques', du: coutKmDu, recu: parseFloat(formData.montantRecuKm) || 0 });
        depenses.push({ nom: 'Hôtel (Forfait)', du: parseFloat(formData.hotelForfait) || 0, recu: parseFloat(formData.montantRecuHotelForfait) || 0 });
      }

      const convocationId = convocationToEdit ? convocationToEdit.id : `conv_${Date.now()}`;
      let uploadedFileMeta = null;

      if (pdfFile) {
        if (!auth || !auth.currentUser) {
          const e = new Error('Vous devez être connecté pour téléverser un fichier.');
          e.code = 'auth/not-authenticated';
          throw e;
        }

        setUploadProgress(0);
        setUploadError(null);

        try {
          if (convocationToEdit && convocationToEdit.filePath) {
            try {
              await deleteObject(storageRef(storage, convocationToEdit.filePath));
            } catch (err) {
              logger.warn('Unable to delete previous file:', err);
            }
          }

          const filePath = `convocations/${convocationId}/${Date.now()}_${pdfFile.name}`;
          const sRef = storageRef(storage, filePath);
          const uploadTask = uploadBytesResumable(sRef, pdfFile);

          const downloadUrl = await new Promise((resolve, reject) => {
            uploadTask.on(
              'state_changed',
              (snapshot) => {
                const prog = snapshot.totalBytes ? Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100) : null;
                setUploadProgress(prog);
              },
              (error) => {
                let friendly = error?.message || 'Erreur lors du téléversement.';
                if (error?.code === 'storage/retry-limit-exceeded') {
                  friendly = "Téléversement interrompu après plusieurs tentatives — vérifiez votre connexion réseau et les règles Firebase Storage.";
                } else if (error?.code === 'storage/unauthorized' || error?.code === 'storage/permission-denied') {
                  friendly = "Permission refusée. Vérifiez que vous êtes connecté et les règles Firebase Storage.";
                } else if (error?.code === 'storage/canceled') {
                  friendly = "Téléversement annulé.";
                }
                setUploadError(friendly);
                setUploadProgress(null);
                reject(error);
              },
              async () => {
                try {
                  const url = await getDownloadURL(sRef);
                  setUploadProgress(100);
                  resolve(url);
                } catch (err) {
                  reject(err);
                }
              }
            );
          });

          uploadedFileMeta = { fileName: pdfFile.name, filePath, fileUrl: downloadUrl };
        } catch (err) {
          if (!uploadError) {
            setUploadError(err?.message || 'Erreur lors du téléversement');
          }
          throw err;
        }
      }

      const convocationData = {
        id: convocationId,
        numero: formData.numero,
        date: formData.date,
        motifId: formData.motifId,
        motifNom: motif ? motif.nom : 'Motif inconnu',
        expenseType: formData.expenseType,
        depenses,
        km: formData.expenseType === 'forfait' ? (formData.km || 0) : 'N/A',
        trajetId: formData.trajetId || null,
        trajetNom: trajet ? trajet.nom : 'N/A',
        trajetDistance: trajet ? trajet.distance : 0,
        detailsReel: formData.expenseType === 'reel' ? {
          locationVoiture: parseFloat(formData.locationVoiture) || 0,
          carburant: parseFloat(formData.carburant) || 0,
          avion: parseFloat(formData.avion) || 0,
          train: parseFloat(formData.train) || 0,
          repas: parseFloat(formData.repas) || 0,
          transportCommun: parseFloat(formData.transportCommun) || 0,
          parking: parseFloat(formData.parking) || 0,
          peageSurcout: parseFloat(formData.peageSurcout) || 0,
          coutTrajet: reelCalculations.coutTrajetDu || 0,
        } : null,
        kmADeclarer: formData.expenseType === 'reel' ? reelCalculations.kmADeclarer : 0,
      };

      if (uploadedFileMeta) {
        convocationData.fileName = uploadedFileMeta.fileName;
        convocationData.filePath = uploadedFileMeta.filePath;
        convocationData.fileUrl = uploadedFileMeta.fileUrl;
      } else if (convocationToEdit && convocationToEdit.fileUrl) {
        convocationData.fileName = convocationToEdit.fileName;
        convocationData.filePath = convocationToEdit.filePath;
        convocationData.fileUrl = convocationToEdit.fileUrl;
      }

      if (convocationToEdit) {
        await onUpdateConvocation(convocationData);
      } else {
        await onAddConvocation(convocationData);
      }

      onClose();
    } catch (error) {
      let errorMessage = "Une erreur est survenue lors de l'enregistrement.";
      if (error instanceof Error) {
        if (error.code) {
          switch (error.code) {
            case 'storage/unauthorized':
              errorMessage = 'Permission refusée. Vérifiez les règles de sécurité de Firebase Storage.';
              break;
            case 'auth/not-authenticated':
              errorMessage = 'Vous devez être connecté pour téléverser un fichier.';
              break;
            case 'permission-denied':
              errorMessage = 'Permission refusée. Vérifiez les règles de sécurité de Firestore.';
              break;
            default:
              errorMessage = `Une erreur inattendue est survenue: ${error.code}.`;
          }
        } else {
          errorMessage = `Erreur: ${error.message}.`;
        }
      } else if (typeof error === 'string') {
        errorMessage = error;
      }
      setErrors(prev => ({ ...prev, form: errorMessage }));
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (formData.expenseType === 'forfait') {
      setFormData(prev => ({
        ...prev,
        locationVoiture: '',
        carburant: '',
        avion: '',
        train: '',
        repas: '',
        transportCommun: '',
        parking: '',
        peageSurcout: '',
        hotelReel: '',
        montantRecuReel: '',
        montantRecuHotelReel: '',
        trajetId: '',
      }));
    } else if (formData.expenseType === 'reel') {
      setFormData(prev => ({
        ...prev,
        km: '',
        hotelForfait: '',
        montantRecuKm: '',
        montantRecuHotelForfait: '',
      }));
    }
  }, [formData.expenseType]);

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4 backdrop-blur-sm animate-fade-in safe-padding-modal">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-800 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col animate-scale-in">
        <div className="flex justify-between items-center p-4 border-b dark:border-zinc-700">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-white">{convocationToEdit ? 'Modifier la' : 'Nouvelle'} Convocation</h3>
          <CodedButton variant="ghost" onClick={onClose} className="!p-2"><X size={20} /></CodedButton>
        </div>

        <div className="p-6 space-y-6 overflow-y-auto">
          {!hasMotifs && (
            <div className="bg-yellow-100 dark:bg-yellow-800/50 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-200 p-4 rounded-md" role="alert">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <p className="font-bold">Aucun motif trouvé !</p>
                  <p className="text-sm">Vous devez créer un motif avant d&apos;ajouter une convocation.</p>
                </div>
                <CodedButton type="button" onClick={onGoToSettings} variant="solid" className="bg-yellow-600 hover:bg-yellow-700 text-white flex-shrink-0">
                  Aller aux Paramètres
                </CodedButton>
              </div>
            </div>
          )}

          <div className={`${!hasMotifs ? 'opacity-50 pointer-events-none' : ''} space-y-6`}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <FormInput label="Numéro de convocation" name="numero" type="text" value={formData.numero} onChange={handleChange} placeholder="" required isInvalid={!!errors.numero} />
              <FormInput label="Date" name="date" type="date" value={formData.date} onChange={handleChange} required isInvalid={!!errors.date} />
              <div>
                <label htmlFor="motifId" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Motif de convocation</label>
                <select
                  id="motifId"
                  name="motifId"
                  value={formData.motifId}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm dark:bg-zinc-700 dark:text-white transition duration-200 ${
                    errors.motifId
                      ? 'border-red-500 ring-red-500'
                      : 'border-zinc-300 dark:border-zinc-600 focus:border-blue-500 focus:ring-blue-500 focus:ring-1'
                  }`}
                  required
                >
                  {!formData.motifId && sortedMotifs.length > 0 && <option value="" disabled>Sélectionnez un motif</option>}
                  {sortedMotifs.map(motif => (
                    <option key={motif.id} value={motif.id}>{motif.nom}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400">Frais de Déplacement</h3>
              <div className="flex w-full sm:w-1/2 rounded-md bg-zinc-100 dark:bg-zinc-700 p-1">
                <button type="button" onClick={() => setFormData(p => ({ ...p, expenseType: 'forfait' }))} className={`w-1/2 rounded-md py-2 text-sm font-medium transition-all duration-200 ${formData.expenseType === 'forfait' ? 'bg-white dark:bg-zinc-800 shadow-sm text-blue-600 dark:text-blue-400' : 'text-zinc-600 dark:text-zinc-300 hover:bg-white/50 dark:hover:bg-zinc-800/50'}`}>
                  Au Forfait
                </button>
                <button type="button" onClick={() => setFormData(p => ({ ...p, expenseType: 'reel' }))} className={`w-1/2 rounded-md py-2 text-sm font-medium transition-all duration-200 ${formData.expenseType === 'reel' ? 'bg-white dark:bg-zinc-800 shadow-sm text-blue-600 dark:text-blue-400' : 'text-zinc-600 dark:text-zinc-300 hover:bg-white/50 dark:hover:bg-zinc-800/50'}`}>
                  Au Réel
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3">
                <div />
                <ReadOnlyField label="Indemnité (Due)" value={formatCurrency(montantsDus.indemniteDue)} />
                <FormInput label="Montant perçu (Indemnité)" name="montantRecuIndemnite" type="number" step="0.01" min="0" value={formData.montantRecuIndemnite} onChange={handleChange} placeholder="0.00" isCurrency />
              </div>

              <ExpenseLine label="Péage" name="peage" nameRecu="montantRecuPeage" value={formData.peage} valueRecu={formData.montantRecuPeage} onChange={handleChange} />
              {formData.expenseType === 'reel' && (
                <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center sm:text-right sm:pr-[calc(33.33%+1.5rem)] -mt-3">(Le péage est inclus dans le &quot;Total Frais Réels&quot; ci-dessous)</p>
              )}
            </div>

            {formData.expenseType === 'forfait' && (
              <div className="space-y-4 animate-fade-in-sm">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg">
                  <FormInput label="Nombre de kilomètres" name="km" type="number" step="0.1" min="0" value={formData.km} onChange={handleChange} placeholder="ex: 120.5" />
                  <ReadOnlyField label="Coût kilométrique (Dû)" value={formatCurrency(montantsDus.coutKmDu)} />
                  <FormInput label="Montant perçu (KM)" name="montantRecuKm" type="number" step="0.01" min="0" value={formData.montantRecuKm} onChange={handleChange} placeholder="0.00" isCurrency />
                </div>
              </div>
            )}

            {formData.expenseType === 'reel' && (
              <div className="space-y-4 animate-fade-in-sm">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg">
                  <div>
                    <label htmlFor="trajetId" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Trajet Domicile-Gare/Aéroport</label>
                    <select id="trajetId" name="trajetId" value={formData.trajetId} onChange={handleChange} className="mt-1 block w-full rounded-md border-zinc-300 dark:border-zinc-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm dark:bg-zinc-700 dark:text-white transition duration-200">
                      <option value="">-- Aucun trajet --</option>
                      {trajets.map(trajet => (<option key={trajet.id} value={trajet.id}>{trajet.nom} ({trajet.distance} km)</option>))}
                    </select>
                  </div>
                  <ReadOnlyField label="Coût Trajet (Dû)" value={formatCurrency(reelCalculations.coutTrajetDu)} />
                  <div />
                </div>

                <ExpenseLineSimple label="Voiture de location" name="locationVoiture" value={formData.locationVoiture} onChange={handleChange} />
                <ExpenseLineSimple label="Carburant" name="carburant" value={formData.carburant} onChange={handleChange} />
                <ExpenseLineSimple label="Avion" name="avion" value={formData.avion} onChange={handleChange} />
                <ExpenseLineSimple label="Train" name="train" value={formData.train} onChange={handleChange} />
                <ExpenseLineSimple label="Repas" name="repas" value={formData.repas} onChange={handleChange} />
                <ExpenseLineSimple label="Transport en commun" name="transportCommun" value={formData.transportCommun} onChange={handleChange} />
                <ExpenseLineSimple label="Parking" name="parking" value={formData.parking} onChange={handleChange} />
                <ExpenseLineSimple label="Péage Surcoût" name="peageSurcout" value={formData.peageSurcout} onChange={handleChange} />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3 pt-6 border-t border-zinc-200 dark:border-zinc-700">
                  <ReadOnlyField label="Total Frais Réels (Dû)" value={formatCurrency(reelCalculations.totalReelDu)} description="(Déplacements + Trajet)" />
                  <FormInput label="Montant perçu (Frais Réels)" name="montantRecuReel" type="number" step="0.01" min="0" value={formData.montantRecuReel} onChange={handleChange} placeholder="0.00" isCurrency />
                  <ReadOnlyField label="Indemnités KM à déclarer" value={`${reelCalculations.kmADeclarer} km`} description={`(Frais hors péage/hôtel / Coeff. ${motifs.find(m => m.id === formData.motifId)?.coeffKm || 'N/A'})`} />
                </div>
              </div>
            )}

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400">Frais d&apos;Hébergement</h3>
              {formData.expenseType === 'forfait' && (
                <ExpenseLine label="Hôtel (Forfait)" name="hotelForfait" nameRecu="montantRecuHotelForfait" value={formData.hotelForfait} valueRecu={formData.montantRecuHotelForfait} onChange={handleChange} />
              )}
              {formData.expenseType === 'reel' && (
                <>
                  <ExpenseLine label="Hôtel (Réel)" name="hotelReel" nameRecu="montantRecuHotelReel" value={formData.hotelReel} valueRecu={formData.montantRecuHotelReel} onChange={handleChange} />
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center sm:text-right sm:pr-[calc(33.33%+1.5rem)] -mt-3">(L&apos;hôtel est inclus dans le &quot;Total Frais Réels&quot; ci-dessus)</p>
                </>
              )}
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400">Document (PDF)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3 rounded-lg">
                <div />
                <div className="col-span-2">
                  <div className="flex items-center justify-between p-3 border rounded-lg bg-transparent dark:bg-transparent">
                    <div className="flex items-center space-x-3">
                      <div className="p-1 rounded-md bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300">
                        <UploadCloud size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                          {pdfFile
                            ? `${pdfFile.name} • ${formatFileSize(pdfFile.size)}`
                            : convocationToEdit?.fileName
                              ? `Fichier : ${convocationToEdit.fileName}`
                              : 'Aucun document'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input ref={fileInputRef} type="file" accept="application/pdf" onChange={(e) => setPdfFile(e.target.files?.[0] || null)} className="hidden" />
                      <CodedButton variant="solid" type="button" onClick={() => fileInputRef.current && fileInputRef.current.click()} className="px-3 py-1 text-sm">
                        {pdfFile ? 'Remplacer' : 'Choisir'}
                      </CodedButton>
                      {pdfFile && (
                        <CodedButton variant="ghost" className="!p-2" onClick={() => setPdfFile(null)} title="Annuler"><X size={14} /></CodedButton>
                      )}
                      {!pdfFile && convocationToEdit?.fileUrl && (
                        <a href={convocationToEdit.fileUrl} target="_blank" rel="noreferrer" title="Télécharger">
                          <CodedButton variant="ghost" className="!p-2" aria-label="Télécharger"><Download size={14} /></CodedButton>
                        </a>
                      )}
                    </div>
                  </div>

                  {uploadProgress !== null && (
                    <div className="mt-2">
                      <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-1 overflow-hidden">
                        <div className="bg-zinc-700 dark:bg-zinc-400 h-1 transition-all" style={{ width: `${uploadProgress}%` }} />
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{uploadProgress}%</p>
                    </div>
                  )}
                  {uploadError && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{uploadError}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-t dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 rounded-b-lg gap-4">
          <div className="flex-grow text-center sm:text-left w-full sm:w-auto">
            {errors.form && <p className="text-sm text-red-600 dark:text-red-400">{errors.form}</p>}
          </div>
          <div className="flex flex-col-reverse sm:flex-row items-center gap-3 w-full sm:w-auto">
            <CodedButton onClick={onClose} variant="secondary" className="w-full sm:w-auto">Annuler</CodedButton>
            <CodedButton type="submit" variant="solid" disabled={!hasMotifs || isSubmitting} className="w-full sm:w-auto">
              {isSubmitting ? 'Enregistrement...' : convocationToEdit ? 'Mettre à jour' : 'Enregistrer'}
            </CodedButton>
          </div>
        </div>
      </form>
    </div>
  );
};
