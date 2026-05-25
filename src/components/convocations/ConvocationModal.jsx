import React, { useState, useMemo } from 'react';
import { X, ChevronDown, Download, Trash2 } from 'lucide-react';
import { CodedButton } from '../ui/CodedButton';
import { formatCurrency } from '../../utils/finance';

export const ConvocationModal = ({ show, onClose, convocation, onEdit, onDelete, onDeleteFile }) => {
  const [isReelDetailsOpen, setIsReelDetailsOpen] = useState(false);

  const depensesAffichees = useMemo(() => {
    if (!convocation) return [];

    const lignes = [];
    const detailLines = [];
    let totalFraisReelsDep = null;

    if (convocation.detailsReel) {
      const details = convocation.detailsReel;
      const addDetailRow = (nom, valeur) => {
        if (valeur > 0) {
          detailLines.push({ nom, du: valeur, recu: null, isDetail: true });
        }
      };

      if (details.coutTrajet > 0 && convocation.trajetNom) {
        addDetailRow(`Trajet (${convocation.trajetNom})`, details.coutTrajet);
      }
      addDetailRow('Location Voiture', details.locationVoiture);
      addDetailRow('Carburant', details.carburant);
      addDetailRow('Avion', details.avion);
      addDetailRow('Train', details.train);
      addDetailRow('Repas', details.repas);
      addDetailRow('Transport en commun', details.transportCommun);
      addDetailRow('Parking', details.parking);
      addDetailRow('Péage Surcoût', details.peageSurcout);
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
      lignes.push({ ...totalFraisReelsDep, isToggle: true, hasDetails: detailLines.length > 0 });
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

  if (!show || !convocation) return null;

  const totalDu = convocation.depenses.reduce((acc, dep) => acc + dep.du, 0);
  const totalRecu = convocation.depenses.reduce((acc, dep) => acc + dep.recu, 0);

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4 backdrop-blur-sm animate-fade-in safe-padding-modal">
      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col animate-scale-in">
        <div className="flex justify-between items-center p-4 border-b dark:border-zinc-700">
          <div>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Détail - Convocation {convocation.numero}</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{new Date(convocation.date).toLocaleDateString('fr-FR')} - {convocation.motifNom}</p>
          </div>
          <CodedButton variant="ghost" onClick={onClose} className="!p-2"><X size={20} /></CodedButton>
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
                    <td colSpan="3" className="px-4 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">Aucune dépense à afficher.</td>
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
                                <ChevronDown size={16} className={`transition-transform duration-200 ${isReelDetailsOpen ? 'rotate-180' : ''}`} />
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
                          <td className="pl-12 pr-4 py-2 text-sm text-zinc-600 dark:text-zinc-300">- {dep.nom}</td>
                          <td className="px-4 py-2 text-sm text-zinc-700 dark:text-zinc-200 text-right">{formatCurrency(dep.du)}</td>
                          <td className="px-4 py-2 text-sm text-green-600 dark:text-green-400 text-right"><span className="text-xs text-zinc-400 dark:text-zinc-500 italic">(inclus)</span></td>
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
            <CodedButton onClick={onClose} variant="secondary" className="w-full sm:w-auto">Fermer</CodedButton>
            <CodedButton onClick={onEdit} variant="solid" className="w-full sm:w-auto">Modifier</CodedButton>
          </div>
        </div>
      </div>
    </div>
  );
};
