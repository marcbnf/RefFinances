import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  BarChart2, Plus, Settings as SettingsIcon, Trash2, Edit2,
  X, Sun, Moon, AlertTriangle, UploadCloud, CheckCircle,
  MinusCircle, Clock, Route,
  Download,
  // Upload, // Non utilisé dans cette version
  ChevronDown,
  Search
} from 'lucide-react';
import {
  collection, onSnapshot, getDocs, doc, setDoc, updateDoc, deleteDoc, writeBatch, serverTimestamp
} from 'firebase/firestore';
import { db, storage, auth } from './firebase'; 
import { signInWithEmailAndPassword, signOut as firebaseSignOut, sendPasswordResetEmail, onAuthStateChanged } from 'firebase/auth';
import { ref as storageRef, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';

// --- Références Firestore ---
const appDataDocRef = doc(db, 'appdata', 'main');
const convocationsColRef = collection(appDataDocRef, 'convocations');
const motifsColRef = collection(appDataDocRef, 'motifs');
const trajetsColRef = collection(appDataDocRef, 'trajets');

// --- Fonction pour mettre à jour le timestamp de modification ---
const updateModificationTimestamp = async () => {
  try {
    await setDoc(appDataDocRef, { lastModification: serverTimestamp() }, { merge: true });
  } catch (error) {
    console.error("Erreur lors de la mise à jour du timestamp:", error);
  }
};

// --- Composant : Bouton Stylisé ---
const CodedButton = ({ children, onClick, type = 'button', variant = 'solid', className = '', disabled = false, ...props }) => {
  const baseStyle = 'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900 disabled:opacity-50 disabled:pointer-events-none transform active:scale-[0.98]';

  const variants = {
    solid: 'bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:shadow-md dark:bg-blue-500 dark:hover:bg-blue-600',
    secondary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600',
    ghost: 'hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300',
    danger: 'bg-red-500 text-white shadow-sm hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// --- Composant : Champ de Formulaire ---
const FormInput = ({ label, name, type, value, onChange, placeholder, isCurrency = false, isInvalid = false, ...props }) => (
  <div className="w-full">
    <label htmlFor={name} className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
      {label}
    </label>
    <div className="relative rounded-md shadow-sm">
      {isCurrency && (
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500 sm:text-sm">
          €
        </span>
      )}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`block w-full rounded-md shadow-sm sm:text-sm dark:bg-zinc-700 dark:text-white transition duration-200 ease-in-out ${isCurrency ? 'pl-7' : 'pl-3'} ${
          isInvalid
            ? 'border-red-500 ring-red-500'
            : 'border-zinc-300 dark:border-zinc-600 focus:border-blue-500 focus:ring-blue-500 focus:ring-1'
        }`}
        {...props}
      />
    </div>
  </div>
);

// --- Composant : Champ Lecture Seule ---
const ReadOnlyField = ({ label, value, description }) => (
  <div className="w-full">
    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
      {label}
    </label>
    <div className="mt-1">
      <p className="block w-full rounded-md border-0 py-1.5 px-3 text-zinc-900 dark:text-white shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-600 bg-zinc-50 dark:bg-zinc-700/50 sm:text-sm h-[38px] flex items-center">
        {value || '-'}
      </p>
      {description && <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400">{description}</p>}
    </div>
  </div>
);

// --- Composant : Ligne de Dépense (Double) ---
const ExpenseLine = ({ label, name, nameRecu, value, valueRecu, onChange }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg">
    <div /> {/* Espace vide pour aligner */}
    <FormInput
      label={`${label} (Dû)`}
      name={name}
      type="number"
      step="0.01"
      min="0"
      value={value}
      onChange={onChange}
      placeholder="0.00"
      isCurrency
    />
    <FormInput
      label={`Montant perçu (${label})`}
      name={nameRecu}
      type="number"
      step="0.01"
      min="0"
      value={valueRecu}
      onChange={onChange}
      placeholder="0.00"
      isCurrency
    />
  </div>
);

// --- Composant : Ligne de Dépense (Simple) ---
const ExpenseLineSimple = ({ label, name, value, onChange }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg">
    <div /> {/* Espace vide pour aligner */}
    <FormInput
      label={`${label} (Dû)`}
      name={name}
      type="number"
      step="0.01"
      min="0"
      value={value}
      onChange={onChange}
      placeholder="0.00"
      isCurrency
    />
    <div /> {/* Espace vide */}
  </div>
);

// --- Composant : Carte Statistique ---
const StatCard = ({ title, value, icon }) => (
  <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md flex items-center space-x-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300">
      {icon}
    </div>
    <div>
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{title}</p>
      <p className="text-2xl font-bold text-zinc-900 dark:text-white">{value}</p>
    </div>
  </div>
);

// --- Utilitaires ---
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(amount || 0);
};

const formatFileSize = (bytes) => {
  if (!bytes && bytes !== 0) return '';
  const thresh = 1024;
  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }
  const units = ['KB','MB','GB','TB'];
  let u = -1;
  do {
    bytes /= thresh;
    ++u;
  } while(Math.abs(bytes) >= thresh && u < units.length - 1);
  return bytes.toFixed(1)+' '+units[u];
};

const getConvocationStatus = (convocation) => {
  const totalDu = convocation.depenses.reduce((acc, dep) => acc + dep.du, 0);
  const totalRecu = convocation.depenses.reduce((acc, dep) => acc + dep.recu, 0);

  const roundedDu = Math.round(totalDu * 100) / 100;
  const roundedRecu = Math.round(totalRecu * 100) / 100;

  if (roundedRecu >= roundedDu && roundedDu > 0) {
    return { 
      text: 'Payé', 
      color: 'text-green-600 dark:text-green-400', 
      icon: <CheckCircle size={14} />,
      bgColor: 'bg-green-100 dark:bg-green-900/50' 
    };
  } else if (roundedRecu > 0 && roundedRecu < roundedDu) {
    return { 
      text: 'Partiel', 
      color: 'text-yellow-600 dark:text-yellow-400', 
      icon: <MinusCircle size={14} />,
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/50' 
    };
  }
  return { 
    text: 'En attente', 
    color: 'text-zinc-500', 
    icon: <Clock size={14} />,
    bgColor: 'bg-zinc-100 dark:bg-zinc-700' 
  };
};

// --- Composant : Ligne de Convocation (Tableau Bureau) ---
const ConvocationItem = ({ convocation, onClick, onToggleSelect, isSelected }) => {
  const totalDu = convocation.depenses.reduce((acc, dep) => acc + dep.du, 0);
  const totalRecu = convocation.depenses.reduce((acc, dep) => acc + dep.recu, 0);
  const status = getConvocationStatus(convocation);
  const handleRowClick = (e) => {
    if (e.target.type === 'checkbox') return;
    onClick(e);
  };

  return (
    <tr onClick={handleRowClick} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/60 cursor-pointer border-b border-zinc-200 dark:border-zinc-700 transition-colors duration-150">
      <td className="px-5 py-4 text-sm font-medium text-zinc-900 dark:text-white">
        <input
          type="checkbox"
          className="rounded border-zinc-300 dark:border-zinc-600 text-blue-600 focus:ring-blue-500 dark:bg-zinc-700 dark:checked:bg-blue-500"
          checked={isSelected}
          onChange={() => onToggleSelect(convocation.id)}
          onClick={(e) => e.stopPropagation()}
        />
      </td>
      <td className="px-5 py-4 text-sm font-medium text-zinc-900 dark:text-white">
        {convocation.numero}
      </td>
      <td className="px-5 py-4 text-sm text-zinc-600 dark:text-zinc-300">
        {new Date(convocation.date).toLocaleDateString('fr-FR')}
      </td>
      <td className="px-5 py-4 text-sm text-zinc-600 dark:text-zinc-300">
        {convocation.motifNom || 'N/A'}
      </td>
      <td className="px-5 py-4 text-sm font-semibold text-zinc-900 dark:text-white">
        {formatCurrency(totalDu)}
      </td>
      <td className="px-5 py-4 text-sm font-semibold text-green-600 dark:text-green-400">
        {formatCurrency(totalRecu)}
      </td>
      <td className="px-5 py-4 text-sm">
        <span className={`inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${status.color} ${status.bgColor}`}>
          {status.icon}
          <span>{status.text}</span>
        </span>
      </td>
    </tr>
  );
};

// --- Composant : Modale de Confirmation ---
const ConfirmModal = ({ show, onClose, onConfirm, title, message }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black/60 z-[60] flex justify-center items-center p-4 backdrop-blur-sm animate-fade-in safe-padding-modal">
      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-xl w-full max-w-md animate-scale-in">
        <div className="p-6">
          <div className="flex items-start space-x-3">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/50 sm:mx-0">
              <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" aria-hidden="true" />
            </div>
            <div className="mt-0 text-left">
              <h3 className="text-lg leading-6 font-medium text-zinc-900 dark:text-white" id="modal-title">
                {title}
              </h3>
              <div className="mt-2">
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  {message}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-zinc-50 dark:bg-zinc-800 px-6 py-4 flex justify-end space-x-3 rounded-b-lg">
          <CodedButton variant="secondary" onClick={onClose}>
            Annuler
          </CodedButton>
          <CodedButton variant="danger" onClick={onConfirm}>
            Supprimer
          </CodedButton>
        </div>
      </div>
    </div>
  );
};

// --- Composant : Modale d'authentification ---
const AuthModal = ({ show, onClose, isAuthenticated, userEmail, onSignIn, onSignOut, onSendReset }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (isAuthenticated && userEmail) {
      setEmail(userEmail);
    }
  }, [isAuthenticated, userEmail]);

  if (!show) return null;

  const handleSignInClick = async () => {
    setIsProcessing(true);
    setMessage(null);
    try {
      await onSignIn(email, password);
    } catch (e) {
      setMessage(e?.message || 'Erreur de connexion');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSendResetClick = async () => {
    setIsProcessing(true);
    setMessage(null);
    try {
      await onSendReset(email);
      setMessage('Email de réinitialisation envoyé.');
    } catch (e) {
      setMessage(e?.message || 'Erreur lors de la demande de réinitialisation');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSignOutClick = async () => {
    setIsProcessing(true);
    try {
      await onSignOut();
    } catch (e) {
      setMessage(e?.message || 'Erreur lors de la déconnexion');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-[60] flex justify-center items-center p-4 backdrop-blur-sm animate-fade-in safe-padding-modal">
      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-xl w-full max-w-md animate-scale-in">
        <div className="flex justify-between items-center p-4 border-b dark:border-zinc-700">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Connexion</h3>
          <CodedButton variant="ghost" onClick={onClose} className="!p-2"><X size={20} /></CodedButton>
        </div>
        <div className="p-6 space-y-4">
          {isAuthenticated ? (
            <div className="space-y-3">
              <p className="text-sm text-zinc-700 dark:text-zinc-300">Connecté en tant que</p>
              <p className="font-medium">{userEmail}</p>
              <div className="flex justify-end">
                <CodedButton variant="secondary" onClick={handleSignOutClick} disabled={isProcessing}>Déconnexion</CodedButton>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <FormInput label="Email" name="authEmail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="votre@email.com" />
              <FormInput label="Mot de passe" name="authPassword" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
              {message && <p className="text-sm text-red-600 dark:text-red-400">{message}</p>}
              <div className="flex justify-between items-center">
                <button type="button" className="text-sm text-blue-600 hover:underline" onClick={handleSendResetClick} disabled={isProcessing}>Mot de passe perdu</button>
                <div className="space-x-2">
                  <CodedButton variant="secondary" onClick={onClose}>Annuler</CodedButton>
                  <CodedButton variant="solid" onClick={handleSignInClick} disabled={isProcessing}>Se connecter</CodedButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Composant : Modale d'édition de motif ---
const MotifEditModal = ({ show, onClose, onSave, motif }) => {
  const [currentMotif, setCurrentMotif] = useState({ nom: '', plafondKm: '', coeffKm: '', indemnite: '' });

  useEffect(() => {
    if (motif && motif.id) {
      setCurrentMotif(motif);
    } else if (motif) {
      setCurrentMotif({ id: `motif_${Date.now()}`, nom: '', plafondKm: 0, coeffKm: 0, indemnite: 0 });
    }
  }, [motif]);


  if (!show) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentMotif(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const motifToSave = {
      ...currentMotif,
      plafondKm: parseFloat(currentMotif.plafondKm) || 0,
      coeffKm: parseFloat(currentMotif.coeffKm) || 0,
      indemnite: parseFloat(currentMotif.indemnite) || 0,
    };
    onSave(motifToSave);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-[60] flex justify-center items-center p-4 backdrop-blur-sm animate-fade-in safe-padding-modal">
      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-xl w-full max-w-lg animate-scale-in">
        <div className="flex justify-between items-center p-4 border-b dark:border-zinc-700">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-white">
             {motif && motif.id ? 'Modifier le motif' : 'Nouveau motif'}
          </h3>
          <CodedButton variant="ghost" onClick={onClose} className="!p-2">
            <X size={20} />
          </CodedButton>
        </div>
        <div className="p-6 space-y-4">
          <FormInput
            label="Nom du motif"
            name="nom"
            type="text"
            value={currentMotif.nom}
            onChange={handleChange}
            placeholder="Nom du motif"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <FormInput
              label="Plafond (km)"
              name="plafondKm"
              type="number"
              step="1"
              min="0"
              value={currentMotif.plafondKm}
              onChange={handleChange}
              placeholder="ex: 200"
            />
            <FormInput
              label="Coeff. Km"
              name="coeffKm"
              type="number"
              step="0.01"
              min="0"
              value={currentMotif.coeffKm}
              onChange={handleChange}
              placeholder="ex: 0.54"
            />
            <FormInput
              label="Indemnité (€)"
              name="indemnite"
              type="number"
              step="0.01"
              min="0"
              value={currentMotif.indemnite}
              onChange={handleChange}
              placeholder="ex: 150.00"
              isCurrency
            />
          </div>
        </div>
        <div className="bg-zinc-50 dark:bg-zinc-800 px-6 py-4 flex justify-end space-x-3 rounded-b-lg">
          <CodedButton variant="secondary" onClick={onClose}>
            Annuler
          </CodedButton>
          <CodedButton variant="solid" onClick={handleSave}>
            Enregistrer
          </CodedButton>
        </div>
      </div>
    </div>
  );
};

// --- Composant : Modale d'édition de trajet ---
const TrajetEditModal = ({ show, onClose, onSave, trajet }) => {
  const [currentTrajet, setCurrentTrajet] = useState({ nom: '', distance: '' });

  useEffect(() => {
    if (trajet && trajet.id) {
      setCurrentTrajet(trajet);
    } else if (trajet) {
      setCurrentTrajet({ id: `trajet_${Date.now()}`, nom: '', distance: 0 });
    }
  }, [trajet]);


  if (!show) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentTrajet(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const trajetToSave = {
      ...currentTrajet,
      distance: parseFloat(currentTrajet.distance) || 0,
    };
    onSave(trajetToSave);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-[60] flex justify-center items-center p-4 backdrop-blur-sm animate-fade-in safe-padding-modal">
      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-xl w-full max-w-lg animate-scale-in">
        <div className="flex justify-between items-center p-4 border-b dark:border-zinc-700">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-white">
             {trajet && trajet.id ? 'Modifier le trajet' : 'Nouveau trajet'}
          </h3>
          <CodedButton variant="ghost" onClick={onClose} className="!p-2">
            <X size={20} />
          </CodedButton>
        </div>
        <div className="p-6 space-y-4">
          <FormInput
            label="Nom du trajet (ex: Domicile - Gare TGV)"
            name="nom"
            type="text"
            value={currentTrajet.nom}
            onChange={handleChange}
            placeholder="Nom du trajet"
          />
          <FormInput
            label="Distance (km)"
            name="distance"
            type="number"
            step="1"
            min="0"
            value={currentTrajet.distance}
            onChange={handleChange}
            placeholder="ex: 45"
          />
        </div>
        <div className="bg-zinc-50 dark:bg-zinc-800 px-6 py-4 flex justify-end space-x-3 rounded-b-lg">
          <CodedButton variant="secondary" onClick={onClose}>
            Annuler
          </CodedButton>
          <CodedButton variant="solid" onClick={handleSave}>
            Enregistrer
          </CodedButton>
        </div>
      </div>
    </div>
  );
};


// --- Composant : Page Paramètres ---
const Settings = ({ motifs, onSaveMotif, onDeleteMotif, trajets, onSaveTrajet, onDeleteTrajet }) => {
  const [editingMotif, setEditingMotif] = useState(null);
  const [deletingMotif, setDeletingMotif] = useState(null);
  const [editingTrajet, setEditingTrajet] = useState(null);
  const [deletingTrajet, setDeletingTrajet] = useState(null);

  const [activeTab, setActiveTab] = useState('motifs');

  const handleSaveMotifClick = (motif) => {
    onSaveMotif(motif);
    setEditingMotif(null);
  };

  const handleDeleteMotifClick = () => {
    onDeleteMotif(deletingMotif.id);
    setDeletingMotif(null);
  };

  const handleSaveTrajetClick = (trajet) => {
    onSaveTrajet(trajet);
    setEditingTrajet(null);
  };

  const handleDeleteTrajetClick = () => {
    onDeleteTrajet(deletingTrajet.id);
    setDeletingTrajet(null);
  };

  const sortedMotifs = useMemo(() => {
    return [...motifs].sort((a, b) => a.nom.localeCompare(b.nom, 'fr', { sensitivity: 'base' }));
  }, [motifs]);

  return (
    <div className="space-y-6">
      {/* Onglets */}
      <div className="border-b border-zinc-200 dark:border-zinc-700">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('motifs')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm ${
              activeTab === 'motifs'
                ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-300'
                : 'border-transparent text-zinc-500 hover:text-zinc-700 hover:border-zinc-300 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:border-zinc-500'
            }`}
          >
            <SettingsIcon size={16} className="inline-block mr-2" />
            Gestion des Motifs
          </button>
          <button
            onClick={() => setActiveTab('trajets')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm ${
              activeTab === 'trajets'
                ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-300'
                : 'border-transparent text-zinc-500 hover:text-zinc-700 hover:border-zinc-300 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:border-zinc-500'
            }`}
          >
            <Route size={16} className="inline-block mr-2" />
            Gestion des Trajets
          </button>
        </nav>
      </div>

      {/* Contenu de l'onglet Motifs */}
      {activeTab === 'motifs' && (
        <div className="space-y-6 animate-fade-in-sm">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Motifs</h2>
            <CodedButton variant="solid" onClick={() => setEditingMotif({})}>
              <Plus size={16} className="mr-2" />
              Nouveau motif
            </CodedButton>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700">
                <thead className="bg-zinc-50 dark:bg-zinc-700/50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Nom</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Plafond (km)</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Coefficient</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Indemnité</th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
                  {sortedMotifs.length === 0 && (
                    <tr><td colSpan="5" className="px-6 py-12 text-center text-zinc-500 dark:text-zinc-400">Aucun motif créé.</td></tr>
                  )}
                  {sortedMotifs.map((motif) => (
                    <tr key={motif.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900 dark:text-white">{motif.nom}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-600 dark:text-zinc-300">{motif.plafondKm} km</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-600 dark:text-zinc-300">{motif.coeffKm}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-600 dark:text-zinc-300">{formatCurrency(motif.indemnite)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                        <CodedButton variant="ghost" className="!p-2" onClick={() => setEditingMotif(motif)}><Edit2 size={16} /></CodedButton>
                        <CodedButton variant="ghost" className="!p-2 text-red-600 dark:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/50" onClick={() => setDeletingMotif(motif)}><Trash2 size={16} /></CodedButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Contenu de l'onglet Trajets */}
      {activeTab === 'trajets' && (
        <div className="space-y-6 animate-fade-in-sm">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Trajets</h2>
            <CodedButton variant="solid" onClick={() => setEditingTrajet({})}>
              <Plus size={16} className="mr-2" />
              Nouveau trajet
            </CodedButton>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700">
                <thead className="bg-zinc-50 dark:bg-zinc-700/50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Nom du Trajet</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Distance (km)</th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
                  {trajets.length === 0 && (
                    <tr><td colSpan="3" className="px-6 py-12 text-center text-zinc-500 dark:text-zinc-400">Aucun trajet créé.</td></tr>
                  )}
                  {trajets.map((trajet) => (
                    <tr key={trajet.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900 dark:text-white">{trajet.nom}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-600 dark:text-zinc-300">{trajet.distance} km</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                        <CodedButton variant="ghost" className="!p-2" onClick={() => setEditingTrajet(trajet)}><Edit2 size={16} /></CodedButton>
                        <CodedButton variant="ghost" className="!p-2 text-red-600 dark:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/50" onClick={() => setDeletingTrajet(trajet)}><Trash2 size={16} /></CodedButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Modales pour les deux onglets */}
      <MotifEditModal
        show={!!editingMotif}
        onClose={() => setEditingMotif(null)}
        onSave={handleSaveMotifClick}
        motif={editingMotif} 
      />
      <ConfirmModal
        show={!!deletingMotif}
        onClose={() => setDeletingMotif(null)}
        onConfirm={handleDeleteMotifClick}
        title="Supprimer le motif"
        message={`Êtes-vous sûr de vouloir supprimer le motif "${deletingMotif?.nom}" ? Cette action est irréversible.`}
      />

      <TrajetEditModal
        show={!!editingTrajet}
        onClose={() => setEditingTrajet(null)}
        onSave={handleSaveTrajetClick}
        trajet={editingTrajet}
      />
      <ConfirmModal
        show={!!deletingTrajet}
        onClose={() => setDeletingTrajet(null)}
        onConfirm={handleDeleteTrajetClick}
        title="Supprimer le trajet"
        message={`Êtes-vous sûr de vouloir supprimer le trajet "${deletingTrajet?.nom}" ? Cette action est irréversible.`}
      />
    </div>
  );
};

// --- État initial pour le formulaire de convocation ---
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

// --- Composant : Formulaire de nouvelle convocation ---
const ConvocationForm = ({ motifs, trajets, onAddConvocation, onClose, onGoToSettings, convocationToEdit, onUpdateConvocation }) => {

  const sortedMotifs = useMemo(() => {
    return [...motifs].sort((a, b) => a.nom.localeCompare(b.nom, 'fr', { sensitivity: 'base' }));
  }, [motifs]);

  const [formData, setFormData] = useState(() => {
    if (!convocationToEdit) {
      return {
        ...initialFormState,
        motifId: sortedMotifs.length > 0 ? sortedMotifs[0].id : ''
      };
    }

    const indemnite = convocationToEdit.depenses.find(d => d.nom === 'Indemnité');
    const peage = convocationToEdit.depenses.find(d => d.nom === 'Péage');
    const kmForfait = convocationToEdit.depenses.find(d => d.nom === 'Frais Kilométriques');
    const reelTotal = convocationToEdit.depenses.find(d => d.nom === 'Total Frais Réels');
    const hotelForfait = convocationToEdit.depenses.find(d => d.nom === 'Hôtel (Forfait)');
    const hotelReel = convocationToEdit.depenses.find(d => d.nom === 'Hôtel (Réel)');

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

  // --- Logique de calcul des montants ---
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

        const kmCalcules = (plafondKm > 0 && kmArrondis > plafondKm) ? plafondKm : kmArrondis;
        const rawCoutKmDu = kmCalcules * coeffKm;
        coutKmDu = Math.round(rawCoutKmDu * 100) / 100;
    }

    return { indemniteDue, coutKmDu };
  }, [formData.km, formData.motifId, formData.expenseType, motifs]);

  // --- Calculs spécifiques 'Au Réel' ---
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

    // Le totalReelDu inclut deplacements, trajet, peage, hotel
    const rawTotalReelDu = totalDeplacementsReels + rawCoutTrajetDu;

    // Le total pour le calcul des KM (KM à déclarer) DOIT EXCLURE le péage ET l'hôtel
    const rawTotalPourKm = totalDeplacementsReels + rawCoutTrajetDu;

    const kmADeclarer = (coeffKm > 0) ? Math.ceil(rawTotalPourKm / coeffKm) : 0;
    
    const coutTrajetDu = Math.round(rawCoutTrajetDu * 100) / 100;
    const totalReelDu = Math.round(rawTotalReelDu * 100) / 100;

    return { totalReelDu, kmADeclarer, coutTrajetDu };

  }, [
    formData.expenseType,
    formData.motifId,
    formData.trajetId,
    formData.locationVoiture,
    formData.carburant,
    formData.avion,
    formData.train,
    formData.repas, 
    formData.transportCommun, 
    formData.parking, 
    formData.peageSurcout,
    formData.hotelReel, 
    formData.peage, 
    motifs,
    trajets
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.numero.trim()) newErrors.numero = "Le numéro est requis.";
    if (!formData.date) newErrors.date = "La date est requise.";
    if (!formData.motifId) newErrors.motifId = "Le motif est requis.";

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

      const depenses = [
        { nom: 'Indemnité', du: indemniteDue, recu: parseFloat(formData.montantRecuIndemnite) || 0 },
      ];

      if (formData.expenseType === 'reel') {
        if (parseFloat(formData.peage) > 0) {
          depenses.push({ nom: 'Péage', du: parseFloat(formData.peage) || 0, recu: parseFloat(formData.montantRecuPeage) || 0 });
        }
        depenses.push({ nom: 'Total Frais Réels', du: reelCalculations.totalReelDu, recu: parseFloat(formData.montantRecuReel) || 0 });
        if (parseFloat(formData.hotelReel) > 0) {
          depenses.push({ nom: 'Hôtel (Réel)', du: parseFloat(formData.hotelReel) || 0, recu: parseFloat(formData.montantRecuHotelReel) || 0 });
        }
      } else if (formData.expenseType === 'forfait') {
        depenses.push({ nom: 'Péage', du: parseFloat(formData.peage) || 0, recu: parseFloat(formData.montantRecuPeage) || 0 });
        depenses.push({ nom: 'Frais Kilométriques', du: coutKmDu, recu: parseFloat(formData.montantRecuKm) || 0 });
        depenses.push({ nom: 'Hôtel (Forfait)', du: parseFloat(formData.hotelForfait) || 0, recu: parseFloat(formData.montantRecuHotelForfait) || 0 });
      }

      const convocationId = convocationToEdit ? convocationToEdit.id : `conv_${Date.now()}`;

      // Handle PDF upload
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
              console.warn('Unable to delete previous file:', err);
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
                console.error('Upload error:', error);
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
          console.error('Erreur upload fichier:', err);
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
        depenses: depenses,
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
      console.error("Erreur détaillée lors de la soumission:", error);
      let errorMessage = "Une erreur est survenue lors de l'enregistrement.";

      if (error instanceof Error) {
        if (error.code) { 
          switch (error.code) {
            case 'storage/unauthorized':
              errorMessage = "Permission refusée. Vérifiez les règles de sécurité de Firebase Storage.";
              break;
            case 'auth/not-authenticated':
              errorMessage = "Vous devez être connecté pour téléverser un fichier.";
              break;
            case 'permission-denied':
              errorMessage = "Permission refusée. Vérifiez les règles de sécurité de Firestore.";
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
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-zinc-800 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col animate-scale-in"
      >
        <div className="flex justify-between items-center p-4 border-b dark:border-zinc-700">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-white">
            {convocationToEdit ? 'Modifier la' : 'Nouvelle'} Convocation
          </h3>
          <CodedButton variant="ghost" onClick={onClose} className="!p-2">
            <X size={20} />
          </CodedButton>
        </div>

        <div className="p-6 space-y-6 overflow-y-auto">

          {!hasMotifs && (
            <div className="bg-yellow-100 dark:bg-yellow-800/50 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-200 p-4 rounded-md" role="alert">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <p className="font-bold">Aucun motif trouvé !</p>
                  <p className="text-sm">Vous devez créer un motif avant d'ajouter une convocation.</p>
                </div>
                <CodedButton
                  type="button"
                  onClick={onGoToSettings}
                  variant="solid"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white flex-shrink-0"
                >
                  Aller aux Paramètres
                </CodedButton>
              </div>
            </div>
          )}

          <div className={`${!hasMotifs ? 'opacity-50 pointer-events-none' : ''} space-y-6`}>
            {/* Section Infos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <FormInput
                label="Numéro de convocation"
                name="numero"
                type="text"
                value={formData.numero}
                onChange={handleChange}
                placeholder=""
                required
                isInvalid={!!errors.numero}
              />
              <FormInput
                label="Date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
                isInvalid={!!errors.date}
              />
              <div>
                <label htmlFor="motifId" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  Motif de convocation
                </label>
                <select
                  id="motifId"
                  name="motifId"
                  value={formData.motifId}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm dark:bg-zinc-700 dark:text-white transition duration-200 ${
                    !!errors.motifId
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

            {/* Section Frais */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400">Frais de Déplacement</h3>
              <div className="flex w-full sm:w-1/2 rounded-md bg-zinc-100 dark:bg-zinc-700 p-1">
                <button
                  type="button"
                  onClick={() => setFormData(p => ({...p, expenseType: 'forfait'}))}
                  className={`w-1/2 rounded-md py-2 text-sm font-medium transition-all duration-200 ${formData.expenseType === 'forfait' ? 'bg-white dark:bg-zinc-800 shadow-sm text-blue-600 dark:text-blue-400' : 'text-zinc-600 dark:text-zinc-300 hover:bg-white/50 dark:hover:bg-zinc-800/50'}`}
                >
                  Au Forfait
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(p => ({...p, expenseType: 'reel'}))}
                  className={`w-1/2 rounded-md py-2 text-sm font-medium transition-all duration-200 ${formData.expenseType === 'reel' ? 'bg-white dark:bg-zinc-800 shadow-sm text-blue-600 dark:text-blue-400' : 'text-zinc-600 dark:text-zinc-300 hover:bg-white/50 dark:hover:bg-zinc-800/50'}`}
                >
                  Au Réel
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3">
                  <div />
                  <ReadOnlyField
                    label="Indemnité (Due)"
                    value={formatCurrency(montantsDus.indemniteDue)}
                  />
                  <FormInput
                    label="Montant perçu (Indemnité)"
                    name="montantRecuIndemnite"
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.montantRecuIndemnite}
                    onChange={handleChange}
                    placeholder="0.00"
                    isCurrency
                  />
              </div>

              <ExpenseLine
                label="Péage"
                name="peage"
                nameRecu="montantRecuPeage"
                value={formData.peage}
                valueRecu={formData.montantRecuPeage}
                onChange={handleChange}
              />
              {formData.expenseType === 'reel' && (
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center sm:text-right sm:pr-[calc(33.33%+1.5rem)] -mt-3">
                    (Le péage est inclus dans le "Total Frais Réels" ci-dessous)
                  </p>
              )}
            </div>

            {formData.expenseType === 'forfait' && (
              <div className="space-y-4 animate-fade-in-sm">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg">
                  <FormInput
                    label="Nombre de kilomètres"
                    name="km"
                    type="number"
                    step="0.1"
                    min="0"
                    value={formData.km}
                    onChange={handleChange}
                    placeholder="ex: 120.5"
                  />
                  <ReadOnlyField
                    label="Coût kilométrique (Dû)"
                    value={formatCurrency(montantsDus.coutKmDu)}
                  />
                  <FormInput
                    label="Montant perçu (KM)"
                    name="montantRecuKm"
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.montantRecuKm}
                    onChange={handleChange}
                    placeholder="0.00"
                    isCurrency
                  />
                </div>
              </div>
            )}

            {formData.expenseType === 'reel' && (
              <div className="space-y-4 animate-fade-in-sm">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg">
                  <div>
                    <label htmlFor="trajetId" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                      Trajet Domicile-Gare/Aéroport
                    </label>
                    <select
                      id="trajetId"
                      name="trajetId"
                      value={formData.trajetId}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-zinc-300 dark:border-zinc-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm dark:bg-zinc-700 dark:text-white transition duration-200"
                    >
                      <option value="">-- Aucun trajet --</option>
                      {trajets.map(trajet => (
                        <option key={trajet.id} value={trajet.id}>{trajet.nom} ({trajet.distance} km)</option>
                      ))}
                    </select>
                  </div>
                  <ReadOnlyField
                    label="Coût Trajet (Dû)"
                    value={formatCurrency(reelCalculations.coutTrajetDu)}
                  />
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
                  <ReadOnlyField
                    label="Total Frais Réels (Dû)"
                    value={formatCurrency(reelCalculations.totalReelDu)}
                    description="(Déplacements + Trajet)"
                  />
                  <FormInput
                    label="Montant perçu (Frais Réels)"
                    name="montantRecuReel"
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.montantRecuReel}
                    onChange={handleChange}
                    placeholder="0.00"
                    isCurrency
                  />
                  <ReadOnlyField
                    label="Indemnités KM à déclarer"
                    value={`${reelCalculations.kmADeclarer} km`}
                    description={`(Frais hors péage/hôtel / Coeff. ${motifs.find(m => m.id === formData.motifId)?.coeffKm || 'N/A'})`}
                  />
                </div>
              </div>
            )}

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400">Frais d'Hébergement</h3>
              {formData.expenseType === 'forfait' && (
                <ExpenseLine
                  label="Hôtel (Forfait)"
                  name="hotelForfait"
                  nameRecu="montantRecuHotelForfait"
                  value={formData.hotelForfait}
                  valueRecu={formData.montantRecuHotelForfait}
                  onChange={handleChange}
                />
              )}

              {formData.expenseType === 'reel' && (
                <>
                <ExpenseLine
                  label="Hôtel (Réel)"
                  name="hotelReel"
                  nameRecu="montantRecuHotelReel"
                  value={formData.hotelReel}
                  valueRecu={formData.montantRecuHotelReel}
                  onChange={handleChange}
                />
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center sm:text-right sm:pr-[calc(33.33%+1.5rem)] -mt-3">
                    (L'hôtel est inclus dans le "Total Frais Réels" ci-dessus)
                  </p>
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
                        <CodedButton variant="ghost" className="!p-2" onClick={() => setPdfFile(null)} title="Annuler">
                          <X size={14} />
                        </CodedButton>
                      )}

                      {!pdfFile && convocationToEdit?.fileUrl && (
                        <a href={convocationToEdit.fileUrl} target="_blank" rel="noreferrer" title="Télécharger">
                          <CodedButton variant="ghost" className="!p-2" aria-label="Télécharger">
                            <Download size={14} />
                          </CodedButton>
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
                  {uploadError && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-400">{uploadError}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-t dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 rounded-b-lg gap-4">
          <div className="flex-grow text-center sm:text-left w-full sm:w-auto">
            {errors.form && (
              <p className="text-sm text-red-600 dark:text-red-400">{errors.form}</p>
            )}
          </div>
          <div className="flex flex-col-reverse sm:flex-row items-center gap-3 w-full sm:w-auto">
            <CodedButton onClick={onClose} variant="secondary" className="w-full sm:w-auto">
              Annuler
            </CodedButton>
            <CodedButton type="submit" variant="solid" disabled={!hasMotifs || isSubmitting} className="w-full sm:w-auto">
              {isSubmitting ? 'Enregistrement...' : (convocationToEdit ? 'Mettre à jour' : 'Enregistrer')}
            </CodedButton>
          </div>
        </div>
      </form>
    </div>
  );
};

// --- Composant : Modale de Détail de Convocation ---
const ConvocationModal = ({ show, onClose, convocation, onEdit, onDelete, onDeleteFile }) => {
  if (!show || !convocation) return null;

  const [isReelDetailsOpen, setIsReelDetailsOpen] = useState(false);

  const totalDu = convocation.depenses.reduce((acc, dep) => acc + dep.du, 0);
  const totalRecu = convocation.depenses.reduce((acc, dep) => acc + dep.recu, 0);

  const depensesAffichees = useMemo(() => {
    const lignes = [];
    const detailLines = [];
    let totalFraisReelsDep = null;

    if (convocation.detailsReel) {
      const details = convocation.detailsReel;
      const addDetailRow = (nom, valeur) => {
        if (valeur > 0) { 
          detailLines.push({
            nom: nom,
            du: valeur,
            recu: null,
            isDetail: true
          });
        }
      };

      if (details.coutTrajet > 0 && convocation.trajetNom) {
        addDetailRow(`Trajet (${convocation.trajetNom})`, details.coutTrajet);
      }

      addDetailRow("Location Voiture", details.locationVoiture);
      addDetailRow("Carburant", details.carburant);
      addDetailRow("Avion", details.avion);
      addDetailRow("Train", details.train);
      addDetailRow("Repas", details.repas); 
      addDetailRow("Transport en commun", details.transportCommun); 
      addDetailRow("Parking", details.parking); 
      addDetailRow("Péage Surcoût", details.peageSurcout);
    }

    for (const dep of convocation.depenses) {
      if (dep.nom === 'Total Frais Réels') {
        totalFraisReelsDep = dep;
        continue;
      }
      if (dep.du > 0 || (dep.recu != null && dep.recu > 0)) {
        lignes.push(dep);
      }
    }

    if (totalFraisReelsDep) {
      lignes.push({
        ...totalFraisReelsDep,
        isToggle: true, 
        hasDetails: detailLines.length > 0 
      });
    }

    if (isReelDetailsOpen && totalFraisReelsDep) {
       const index = lignes.findIndex(l => l.nom === 'Total Frais Réels');
       if (index > -1) {
         lignes.splice(index + 1, 0, ...detailLines);
       } else {
         lignes.push(...detailLines); 
       }
    }
    
    return lignes;
  }, [convocation, isReelDetailsOpen]);

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4 backdrop-blur-sm animate-fade-in safe-padding-modal">
      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col animate-scale-in">
        <div className="flex justify-between items-center p-4 border-b dark:border-zinc-700">
          <div>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-white">
              Détail - Convocation {convocation.numero}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {new Date(convocation.date).toLocaleDateString('fr-FR')} - {convocation.motifNom}
            </p>
          </div>
          <CodedButton variant="ghost" onClick={onClose} className="!p-2">
            <X size={20} />
          </CodedButton>
        </div>
        <div className="p-6 space-y-4 overflow-y-auto">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Type de frais</p>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                {convocation.expenseType === 'reel' ? 'Au Réel' : 'Au Forfait'}
              </span>
            </div>
            {convocation.expenseType === 'forfait' && (
              <div>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Kilomètres déclarés</p>
                <p className="text-zinc-900 dark:text-white font-medium">{convocation.km} km</p>
              </div>
            )}
            {convocation.expenseType === 'reel' && (
              <div>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">KM à déclarer (Frais)</p>
                <p className="text-zinc-900 dark:text-white font-medium">{convocation.kmADeclarer || '0'} km</p>
              </div>
            )}
          </div>

          <div className="border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden shadow-sm">
            <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700">
              <thead className="bg-zinc-50 dark:bg-zinc-700/50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase">Ligne de Dépense</th>
                  <th className="px-4 py-2 text-right text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase">Montant Dû</th>
                  <th className="px-4 py-2 text-right text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase">Montant Perçu</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
                {depensesAffichees.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="px-4 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
                      Aucune dépense à afficher.
                    </td>
                  </tr>
                ) : (
                  depensesAffichees.map((dep, index) => {
                    if (dep.isToggle) {
                      return (
                        <tr 
                          key="total-reel" 
                          className={`border-t border-zinc-200 dark:border-zinc-600 ${dep.hasDetails ? 'cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/60' : ''}`}
                          onClick={() => dep.hasDetails && setIsReelDetailsOpen(!isReelDetailsOpen)}
                        >
                          <td className="px-4 py-3 text-sm font-semibold text-zinc-900 dark:text-white">
                            <div className="flex items-center space-x-2">
                              {dep.hasDetails && (
                                <ChevronDown 
                                  size={16} 
                                  className={`transition-transform duration-200 ${isReelDetailsOpen ? 'rotate-180' : ''}`} 
                                />
                              )}
                              <span>{dep.nom}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-200 text-right">{formatCurrency(dep.du)}</td>
                          <td className="px-4 py-3 text-sm font-semibold text-green-600 dark:text-green-400 text-right">{formatCurrency(dep.recu)}</td>
                        </tr>
                      );
                    }

                    if (dep.isDetail) {
                      return (
                        <tr key={index} className="bg-zinc-50/50 dark:bg-zinc-800/30 animate-fade-in-sm">
                          <td className="pl-12 pr-4 py-2 text-sm text-zinc-600 dark:text-zinc-300">
                            - {dep.nom}
                          </td>
                          <td className="px-4 py-2 text-sm text-zinc-700 dark:text-zinc-200 text-right">{formatCurrency(dep.du)}</td>
                          <td className="px-4 py-2 text-sm text-green-600 dark:text-green-400 text-right">
                            <span className="text-xs text-zinc-400 dark:text-zinc-500 italic">(inclus)</span>
                          </td>
                        </tr>
                      );
                    }

                    return (
                      <tr key={index}>
                        <td className="px-4 py-3 text-sm font-medium text-zinc-900 dark:text-white">{dep.nom}</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-200 text-right">{formatCurrency(dep.du)}</td>
                        <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400 text-right">{formatCurrency(dep.recu)}</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
              <tfoot className="bg-zinc-50 dark:bg-zinc-700/50 border-t-2 border-zinc-300 dark:border-zinc-600">
                <tr>
                  <td className="px-4 py-3 text-sm font-bold text-zinc-900 dark:text-white text-left">TOTAL</td>
                  <td className="px-4 py-3 text-sm font-bold text-zinc-900 dark:text-white text-right">{formatCurrency(totalDu)}</td>
                  <td className="px-4 py-3 text-sm font-bold text-green-700 dark:text-green-300 text-right">{formatCurrency(totalRecu)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center p-4 border-t dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 rounded-b-lg gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 w-full sm:w-auto">
            <CodedButton onClick={onDelete} variant="danger" className="w-full sm:w-auto">
              <Trash2 size={16} className="mr-2" />
              Supprimer
            </CodedButton>

            {convocation.fileUrl && (
              <>
                <a href={convocation.fileUrl} target="_blank" rel="noreferrer" className="inline-block w-full sm:w-auto">
                  <CodedButton variant="ghost" className="!p-2 w-full justify-center">
                    <Download size={16} className="mr-2" />
                    Télécharger
                  </CodedButton>
                </a>
                <CodedButton 
                  variant="ghost" 
                  className="!p-2 text-red-600 dark:text-red-400 w-full sm:w-auto justify-center" 
                  onClick={() => onDeleteFile && onDeleteFile(convocation)}
                >
                  <Trash2 size={14} className="mr-2" />
                  Suppr. fichier
                </CodedButton>
              </>
            )}
          </div>

          <div className="flex items-center justify-center sm:justify-end space-x-3 w-full sm:w-auto">
            <CodedButton onClick={onClose} variant="secondary" className="w-full sm:w-auto">
              Fermer
            </CodedButton>
            <CodedButton onClick={onEdit} variant="solid" className="w-full sm:w-auto">
              Modifier
            </CodedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Composant : Carte Convocation (Mobile) ---
const ConvocationItemCard = ({ convocation, onClick, onToggleSelect, isSelected }) => {
  const totalDu = convocation.depenses.reduce((acc, dep) => acc + dep.du, 0);
  const totalRecu = convocation.depenses.reduce((acc, dep) => acc + dep.recu, 0);
   
  const status = getConvocationStatus(convocation);

  return (
    <div 
      onClick={onClick} 
      className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4 border border-zinc-200 dark:border-zinc-700 active:scale-[0.98] transition-all duration-150"
    >
      <div className="flex justify-between items-start space-x-3">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="rounded border-zinc-300 dark:border-zinc-600 text-blue-600 focus:ring-blue-500 dark:bg-zinc-700 dark:checked:bg-blue-500 h-5 w-5 flex-shrink-0"
            checked={isSelected}
            onChange={() => onToggleSelect(convocation.id)}
            onClick={(e) => e.stopPropagation()} 
          />
          <div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{convocation.numero}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">{convocation.motifNom || 'N/A'}</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{new Date(convocation.date).toLocaleDateString('fr-FR')}</p>
          </div>
        </div>
        
        <span className={`flex-shrink-0 inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${status.color} ${status.bgColor}`}>
          {status.icon}
          <span>{status.text}</span>
        </span>
      </div>

      <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Montant Dû</p>
          <p className="text-lg font-semibold text-zinc-900 dark:text-white">{formatCurrency(totalDu)}</p>
        </div>
        <div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Montant Perçu</p>
          <p className="text-lg font-semibold text-green-600 dark:text-green-400">{formatCurrency(totalRecu)}</p>
        </div>
      </div>
    </div>
  );
};


// --- Composant : Tableau de Bord ---
const Dashboard = ({ convocations, onSelectConvocation, selectedIds, onSelectId, onSelectAll, onDeleteSelected, searchTerm, onSearchTermChange }) => {
  const stats = useMemo(() => {
    let totalDu = 0;
    let totalRecu = 0;
    convocations.forEach(conv => {
      if (Array.isArray(conv.depenses)) {
        totalDu += conv.depenses.reduce((acc, dep) => acc + (dep.du || 0), 0);
        totalRecu += conv.depenses.reduce((acc, dep) => acc + (dep.recu || 0), 0);
      } else {
        console.warn("conv.depenses n'est pas un tableau pour la convocation:", conv.id, conv);
      }
    });
    const solde = totalRecu - totalDu;
    return { totalDu, totalRecu, solde };
  }, [convocations]);

  const isAllSelected = convocations.length > 0 && selectedIds.length === convocations.length;

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <StatCard title="Total Dû" value={formatCurrency(stats.totalDu)} icon={<BarChart2 size={22} />} />
        <StatCard title="Total Perçu" value={formatCurrency(stats.totalRecu)} icon={<CheckCircle size={22} />} />
        <StatCard title="Solde" value={formatCurrency(stats.solde)} icon={<BarChart2 size={22} />} />
      </div>

      {/* Barre de recherche */}
      <div className="relative mt-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-zinc-400" />
        </div>
        <input
          type="text"
          placeholder="Rechercher par numéro de convocation..."
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-zinc-300 rounded-md leading-5 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:placeholder-zinc-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
        />
      </div>

      {/* Barre d'actions de sélection multiple */}
      {selectedIds.length > 0 && (
        <div className="bg-blue-600 dark:bg-blue-500 text-white rounded-lg shadow-md p-4 flex justify-between items-center animate-fade-in-sm">
          <p className="font-medium">
            {selectedIds.length} {selectedIds.length > 1 ? 'convocations sélectionnées' : 'convocation sélectionnée'}
          </p>
          <CodedButton
            variant="danger"
            onClick={onDeleteSelected}
            className="bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700"
          >
            <Trash2 size={16} className="mr-2" />
            Supprimer la sélection
          </CodedButton>
        </div>
      )}

      {/* Liste des convocations */}
      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
        
        {/* === VUE TABLEAU (Bureau) === */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700">
            <thead className="bg-zinc-50 dark:bg-zinc-700/50">
              <tr>
                <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    className="rounded border-zinc-300 dark:border-zinc-600 text-blue-600 focus:ring-blue-500 dark:bg-zinc-700 dark:checked:bg-blue-500"
                    checked={isAllSelected}
                    onChange={(e) => onSelectAll(e.target.checked)}
                    title="Tout sélectionner"
                  />
                </th>
                <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Numéro</th>
                <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Date</th>
                <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Motif</th>
                <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Montant Dû</th>
                <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Montant Perçu</th>
                <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
              {convocations.length === 0 && (
                <tr>
                  <td colSpan="7" className="px-5 py-12 text-center text-zinc-500 dark:text-zinc-400">
                    Aucune convocation à afficher.
                  </td>
                </tr>
              )}
              {convocations.map(conv => (
                <ConvocationItem
                  key={conv.id}
                  convocation={conv}
                  onClick={() => onSelectConvocation(conv)}
                  isSelected={selectedIds.includes(conv.id)}
                  onToggleSelect={onSelectId}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* === VUE CARTES (Mobile) === */}
        <div className="block sm:hidden p-4 space-y-4 bg-zinc-50/50 dark:bg-zinc-900/50">
           <div className="px-1 py-2 flex items-center">
             <input
               type="checkbox"
               id="select-all-mobile"
               className="rounded border-zinc-300 dark:border-zinc-600 text-blue-600 focus:ring-blue-500 dark:bg-zinc-700 dark:checked:bg-blue-500 h-5 w-5"
               checked={isAllSelected}
               onChange={(e) => onSelectAll(e.target.checked)}
             />
             <label htmlFor="select-all-mobile" className="ml-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
               Tout sélectionner
             </label>
           </div>
           
           {convocations.length === 0 && (
            <div className="px-5 py-12 text-center text-zinc-500 dark:text-zinc-400">
              Aucune convocation à afficher.
            </div>
          )}
          {convocations.map(conv => (
            <ConvocationItemCard
              key={conv.id}
              convocation={conv}
              onClick={() => onSelectConvocation(conv)}
              isSelected={selectedIds.includes(conv.id)}
              onToggleSelect={onSelectId}
            />
          ))}
        </div>

      </div>
    </div>
  );
};


// --- Composant : En-tête ---
const Header = ({ onNewConvocation, onSetPage, page, darkMode, onToggleDarkMode, availableYears, selectedYear, onSelectYear, isAuthenticated, userEmail, onAuthButtonClick }) => {

  const [showExportMenu, setShowExportMenu] = useState(false);
  const exportMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (exportMenuRef.current && !exportMenuRef.current.contains(event.target)) {
        setShowExportMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white dark:bg-zinc-800 shadow-md mb-8 p-4 rounded-lg flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      
      {/* Section Gauche */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:space-x-4 w-full sm:w-auto">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 text-center sm:text-left">
          RefFinances
        </h1>
        
        <nav className="flex items-center space-x-2 w-full sm:w-auto">
          <CodedButton
            variant={page === 'dashboard' ? 'secondary' : 'ghost'}
            onClick={() => onSetPage('dashboard')}
            className={`w-1/2 sm:w-auto justify-center ${page === 'dashboard' ? 'font-semibold bg-zinc-200 dark:bg-zinc-700' : 'font-normal'}`}
          >
            <BarChart2 size={16} className="mr-2" />
            Dashboard
          </CodedButton>
          <CodedButton
            variant={page === 'settings' ? 'secondary' : 'ghost'}
            onClick={() => onSetPage('settings')}
            className={`w-1/2 sm:w-auto justify-center ${page === 'settings' ? 'font-semibold bg-zinc-200 dark:bg-zinc-700' : 'font-normal'}`}
          >
            <SettingsIcon size={16} className="mr-2" />
            Paramètres
          </CodedButton>
        </nav>

        {page === 'dashboard' && availableYears.length > 0 && (
          <div className="w-full sm:w-auto">
            <label htmlFor="year-select" className="sr-only">Filtrer par année</label>
            <select
              id="year-select"
              value={selectedYear}
              onChange={(e) => onSelectYear(e.target.value)}
              className="w-full rounded-md border-zinc-300 dark:border-zinc-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm dark:bg-zinc-700 dark:text-white transition duration-200"
            >
              <option value="all">Toutes les années</option>
              {availableYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Section Droite */}
      <div className="flex items-center space-x-2 justify-center flex-wrap gap-2">
        <CodedButton variant="ghost" className="!p-2" onClick={onToggleDarkMode}>
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </CodedButton>

        <CodedButton variant="ghost" className="!p-2" onClick={onAuthButtonClick}>
          {isAuthenticated ? (userEmail || 'Profil') : 'Connexion'}
        </CodedButton>

        <CodedButton variant="solid" onClick={onNewConvocation} className="flex-grow sm:flex-grow-0">
          <Plus size={16} className="mr-2" />
          Nouvelle Convocation
        </CodedButton>
      </div>
    </header>
  );
};


// --- Composant Principal ---
export default function App() {
  const [page, setPage] = useState('dashboard');
  const [showConvocationForm, setShowConvocationForm] = useState(false);
  const [selectedConvocation, setSelectedConvocation] = useState(null);
  const [editingConvocation, setEditingConvocation] = useState(null);
  const [deletingConvocation, setDeletingConvocation] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 
  const [dataLoadError, setDataLoadError] = useState(null);
  const [selectedConvocationIds, setSelectedConvocationIds] = useState([]); 
  const [deletingMultiple, setDeletingMultiple] = useState(false); 
  const [selectedYear, setSelectedYear] = useState('all'); 
  const [searchTerm, setSearchTerm] = useState(''); 

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const [authProcessing, setAuthProcessing] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [fileDeletionError, setFileDeletionError] = useState(null);

  const [convocations, setConvocations] = useState([]);
  const [motifs, setMotifs] = useState([]);
  const [trajets, setTrajets] = useState([]);

  // --- Effet pour charger les données depuis Firestore ---
  useEffect(() => {
    setIsLoading(true);
    setDataLoadError(null);

    const loadingTimeout = setTimeout(() => {
      if (isLoading) {
        console.warn('[App] Data load timeout: no snapshot received within timeout');
        setIsLoading(false);
        setDataLoadError('Impossible de charger les données depuis Firebase — vérifiez la connexion réseau ou ouvrez l\'application depuis un navigateur pour diagnostiquer.');
      }
    }, 10000); 

    console.debug('[Firestore] setting up convocations listener for', convocationsColRef.path);
    const unsubConvocations = onSnapshot(
      convocationsColRef,
      (snapshot) => {
        console.debug('[Firestore] convocations snapshot received. size=', snapshot.size);
        const convsData = snapshot.docs.map(d => {
          const data = d.data();
          console.debug('[Firestore] conv doc:', d.id, data);
          return { id: d.id, ...data };
        });
        setConvocations(convsData);
        setIsLoading(false);
        setDataLoadError(null);
        clearTimeout(loadingTimeout);
      },
      (error) => {
        console.error('[Firestore] Error listening convocations:', error);
        setIsLoading(false);
        setDataLoadError('Erreur lors de la connexion à Firestore: ' + (error?.message || error?.code || 'unknown'));
        clearTimeout(loadingTimeout);
      }
    );

    getDocs(convocationsColRef)
      .then((snap) => {
        console.debug('[Firestore diag] getDocs convocations size=', snap.size);
      })
      .catch((err) => {
        console.error('[Firestore diag] getDocs convocations error:', err);
      });

    const unsubMotifs = onSnapshot(motifsColRef, (snapshot) => {
      const motifsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMotifs(motifsData);
    });

    const unsubTrajets = onSnapshot(trajetsColRef, (snapshot) => {
      const trajetsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTrajets(trajetsData);
    });

    return () => {
      unsubConvocations();
      unsubMotifs();
      unsubTrajets();
      clearTimeout(loadingTimeout);
    };
  }, []);

  // --- Effet pour suivre l'état d'authentification Firebase ---
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      console.debug('[Auth] onAuthStateChanged called. user:', user);
      setAuthUser(user);
      setIsAuthenticated(!!user);
    });
    return unsub;
  }, []);

  const openAuthModal = () => setAuthModalOpen(true);
  const closeAuthModal = () => setAuthModalOpen(false);

  const openAuthModalDebug = () => {
    console.debug('[Auth] openAuthModal clicked');
    setAuthModalOpen(true);
  };

  const handleSignIn = async (email, password) => {
    setAuthProcessing(true);
    setAuthError(null);
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      console.debug('[Auth] signIn success, user:', cred.user);
      setAuthError(null);
      setAuthModalOpen(false);
    } catch (e) {
      console.error('Erreur signIn:', e);
      setAuthError(e?.message || 'Erreur lors de la connexion');
      throw e;
    } finally {
      setAuthProcessing(false);
    }
  };

  const handleSignOut = async () => {
    setAuthProcessing(true);
    try {
      await firebaseSignOut(auth);
      setAuthUser(null);
      setIsAuthenticated(false);
      setAuthModalOpen(false);
    } catch (e) {
      console.error('Erreur signOut:', e);
      setAuthError(e?.message || 'Erreur lors de la déconnexion');
      throw e;
    } finally {
      setAuthProcessing(false);
    }
  };

  const handleSendReset = async (email) => {
    setAuthProcessing(true);
    setAuthError(null);
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (e) {
      console.error('Erreur reset password:', e);
      setAuthError(e?.message || 'Erreur lors de l envoi du mail');
      throw e;
    } finally {
      setAuthProcessing(false);
    }
  };

  // --- Effet pour gérer le thème (VERSION WEB) ---
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const isSystemDark = mediaQuery.matches;
    setDarkMode(isSystemDark);
    document.documentElement.classList.toggle('dark', isSystemDark);

    const handleChange = (e) => {
      setDarkMode(e.matches);
      document.documentElement.classList.toggle('dark', e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);


  // --- CRUD Handlers ---

  const handleAddConvocation = async (convocation) => {
    try {
      await setDoc(doc(convocationsColRef, convocation.id), convocation);
      await updateModificationTimestamp();
    } catch (error) {
      console.error("Erreur ajout convocation:", error);
      throw error; 
    }
  };

  const handleUpdateConvocation = async (convocation) => {
    try {
      await updateDoc(doc(convocationsColRef, convocation.id), convocation);
      await updateModificationTimestamp();
    } catch (error) {
      console.error("Erreur maj convocation:", error);
      throw error; 
    }
  };

  const handleDeleteConvocation = async () => {
    if (!deletingConvocation) return;
    try {
      if (deletingConvocation.filePath) {
        try {
          await deleteObject(storageRef(storage, deletingConvocation.filePath));
        } catch (err) {
          console.warn('Erreur suppression fichier associé (ignore):', err);
          setFileDeletionError(`Impossible de supprimer le fichier associé: ${deletingConvocation.fileName || deletingConvocation.filePath}. Vérifiez les permissions.`);
        }
      }

      await deleteDoc(doc(convocationsColRef, deletingConvocation.id));
      await updateModificationTimestamp();
      
      setDeletingConvocation(null);
      setSelectedConvocation(null); 
    } catch (error) {
      console.error("Erreur suppression convocation:", error);
      if (error?.code) {
        setFileDeletionError(`Erreur lors de la suppression: ${error.code}`);
      } else {
        setFileDeletionError("Erreur lors de la suppression de la convocation.");
      }
    }
  };

  const handleDeleteConvocationFile = async (convocation) => {
    if (!convocation?.filePath) return;
    try {
      await deleteObject(storageRef(storage, convocation.filePath));
    } catch (err) {
      console.error('Erreur suppression fichier:', err);
      setFileDeletionError(`Impossible de supprimer le fichier: ${convocation.fileName || convocation.filePath}. (${err?.code || err?.message})`);
      throw err;
    }

    try {
      await updateDoc(doc(convocationsColRef, convocation.id), {
        fileName: null,
        filePath: null,
        fileUrl: null,
      });
      await updateModificationTimestamp();
    } catch (err) {
      console.error('Erreur lors de la mise à jour du document après suppression du fichier:', err);
      setFileDeletionError('Erreur lors de la mise à jour du document après suppression du fichier.');
      throw err;
    }
  };

  const handleSaveMotif = async (motif) => {
    try {
      await setDoc(doc(motifsColRef, motif.id), motif, { merge: true });
      await updateModificationTimestamp();
    } catch (error) {
      console.error("Erreur sauvegarde motif:", error);
    }
  };

  const handleDeleteMotif = async (motifId) => {
    try {
      await deleteDoc(doc(motifsColRef, motifId));
      await updateModificationTimestamp();
    } catch (error) {
      console.error("Erreur suppression motif:", error);
    }
  };

  const handleSaveTrajet = async (trajet) => {
    try {
      await setDoc(doc(trajetsColRef, trajet.id), trajet, { merge: true });
      await updateModificationTimestamp();
    } catch (error) {
      console.error("Erreur sauvegarde trajet:", error);
    }
  };

  const handleDeleteTrajet = async (trajetId) => {
    try {
      await deleteDoc(doc(trajetsColRef, trajetId));
      await updateModificationTimestamp();
    } catch (error)
      {
      console.error("Erreur suppression trajet:", error);
    }
  };

  const handleDeleteSelectedConvocations = async () => {
    if (selectedConvocationIds.length === 0) return;
    try {
      const filePaths = selectedConvocationIds
        .map(id => convocations.find(c => c.id === id))
        .filter(Boolean)
        .map(c => c.filePath)
        .filter(Boolean);

      if (filePaths.length > 0) {
        const results = await Promise.allSettled(
          filePaths.map(path => deleteObject(storageRef(storage, path)).then(() => ({ path, ok: true })).catch(err => ({ path, ok: false, err })))
        );
        const failed = results.filter(r => r.status === 'fulfilled' ? r.value && r.value.ok === false : r.status === 'rejected');
        if (failed.length > 0) {
          const failedPaths = failed.map(f => (f.status === 'fulfilled' ? f.value.path : (f.reason?.path || 'unknown')));
          console.warn('Certaines suppressions de fichiers ont échoué:', failedPaths);
          setFileDeletionError(`Impossible de supprimer certains fichiers: ${failedPaths.join(', ')}. Vérifiez les permissions.`);
        }
      }

      const batch = writeBatch(db);
      selectedConvocationIds.forEach(id => {
        batch.delete(doc(convocationsColRef, id));
      });
      await batch.commit();
      await updateModificationTimestamp();

      setSelectedConvocationIds([]);
      setDeletingMultiple(false);
    } catch (error) {
      console.error("Erreur lors de la suppression des convocations sélectionnées:", error);
    }
  };


  const handleImportClick = () => {
    // Import natif désactivé pour la version Web
    alert("L'importation native est désactivée sur la version Web.");
  };

  const handleOpenConvocationForm = (convocation = null) => {
    setEditingConvocation(convocation);
    setShowConvocationForm(true);
    setSelectedConvocation(null); 
  };

  const handleSelectConvocation = (convocation) => {
    setSelectedConvocation(convocation);
  };

  const handleToggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  const handleSelectId = (id) => {
    setSelectedConvocationIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedConvocationIds(filteredAndSortedConvocations.map(c => c.id));
    } else {
      setSelectedConvocationIds([]);
    }
  };

  const filteredAndSortedConvocations = useMemo(() => {
    const yearFiltered = selectedYear === 'all'
      ? convocations
      : convocations.filter(c => new Date(c.date).getFullYear().toString() === selectedYear);

    const searchFiltered = !searchTerm
      ? yearFiltered
      : yearFiltered.filter(c =>
          c.numero.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return searchFiltered.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [convocations, selectedYear, searchTerm]);

  const availableYears = useMemo(() => {
    const years = new Set(convocations.map(c => new Date(c.date).getFullYear().toString()));
    return Array.from(years).sort((a, b) => b - a);
  }, [convocations]);


  // --- Rendu ---
  if (isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-zinc-100 dark:bg-zinc-900">
        <div className="text-center">
          <svg className="animate-spin h-8 w-8 text-blue-600 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">Chargement des données...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`app-safe-layout bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 font-sans ${darkMode ? 'dark' : ''}`}>
      <main className="max-w-7xl mx-auto p-4">
        <Header
          onNewConvocation={() => handleOpenConvocationForm()}
          onSetPage={setPage}
          page={page}
          darkMode={darkMode}
          onToggleDarkMode={handleToggleDarkMode}
          availableYears={availableYears}
          selectedYear={selectedYear}
          onSelectYear={setSelectedYear}
          isAuthenticated={isAuthenticated}
          userEmail={authUser?.email}
          onAuthButtonClick={openAuthModalDebug}
        />

        {dataLoadError && (
          <div className="max-w-7xl mx-auto mt-4 p-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/60 border-l-4 border-yellow-400 text-yellow-800 dark:text-yellow-200 p-3 rounded">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold">Problème de chargement</p>
                  <p className="text-sm mt-1">{dataLoadError}</p>
                </div>
                <div>
                  <button onClick={() => setDataLoadError(null)} className="ml-4 text-yellow-900 dark:text-yellow-200/90 hover:underline">Ignorer</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {page === 'dashboard' && (
          <Dashboard
            convocations={filteredAndSortedConvocations}
            onSelectConvocation={handleSelectConvocation}
            selectedIds={selectedConvocationIds}
            onSelectId={handleSelectId}
            onSelectAll={handleSelectAll}
            onDeleteSelected={() => setDeletingMultiple(true)}
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
          />
        )}

        {fileDeletionError && (
          <div className="fixed bottom-4 right-4 z-50 max-w-md w-full">
            <div className="bg-red-600 text-white p-3 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">Erreur de suppression de fichier</p>
                  <p className="text-sm mt-1">{fileDeletionError}</p>
                </div>
                <div>
                  <button onClick={() => setFileDeletionError(null)} className="ml-4 text-white/90 hover:underline">Fermer</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {page === 'settings' && (
          <Settings
            motifs={motifs}
            onSaveMotif={handleSaveMotif}
            onDeleteMotif={handleDeleteMotif}
            trajets={trajets}
            onSaveTrajet={handleSaveTrajet}
            onDeleteTrajet={handleDeleteTrajet}
          />
        )}
      </main>

      {showConvocationForm && (
        <ConvocationForm
          motifs={motifs}
          trajets={trajets}
          onAddConvocation={handleAddConvocation}
          onUpdateConvocation={handleUpdateConvocation}
          onClose={() => setShowConvocationForm(false)}
          onGoToSettings={() => {
            setShowConvocationForm(false);
            setPage('settings');
          }}
          convocationToEdit={editingConvocation}
        />
      )}

      {selectedConvocation && (
        <ConvocationModal
          show={!!selectedConvocation}
          onClose={() => setSelectedConvocation(null)}
          convocation={selectedConvocation}
          onEdit={() => handleOpenConvocationForm(selectedConvocation)}
          onDelete={() => setDeletingConvocation(selectedConvocation)}
          onDeleteFile={handleDeleteConvocationFile}
        />
      )}

      <ConfirmModal
        show={!!deletingConvocation}
        onClose={() => setDeletingConvocation(null)}
        onConfirm={handleDeleteConvocation}
        title="Supprimer la convocation"
        message={`Êtes-vous sûr de vouloir supprimer la convocation n°${deletingConvocation?.numero} ? Cette action est irréversible.`}
      />

      <ConfirmModal
        show={deletingMultiple}
        onClose={() => setDeletingMultiple(false)}
        onConfirm={handleDeleteSelectedConvocations}
        title="Supprimer les convocations"
        message={`Êtes-vous sûr de vouloir supprimer les ${selectedConvocationIds.length} convocations sélectionnées ? Cette action est irréversible.`}
      />

      <AuthModal
        show={authModalOpen}
        onClose={closeAuthModal}
        isAuthenticated={isAuthenticated}
        userEmail={authUser?.email}
        onSignIn={handleSignIn}
        onSignOut={handleSignOut}
        onSendReset={handleSendReset}
      />
    </div>
  );
}