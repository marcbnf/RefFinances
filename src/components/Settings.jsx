import React, { useState, useMemo } from 'react';
import { Plus, Settings as SettingsIcon, Route, Edit2, Trash2 } from 'lucide-react';
import { CodedButton } from './ui/CodedButton';
import { ConfirmModal } from './ui/ConfirmModal';
import { EntityEditModal } from './ui/EntityEditModal';

export const Settings = ({ motifs, onSaveMotif, onDeleteMotif, trajets, onSaveTrajet, onDeleteTrajet }) => {
  const [editingMotif, setEditingMotif] = useState(null);
  const [deletingMotif, setDeletingMotif] = useState(null);
  const [editingTrajet, setEditingTrajet] = useState(null);
  const [deletingTrajet, setDeletingTrajet] = useState(null);
  const [activeTab, setActiveTab] = useState('motifs');

  const motifFields = [
    { name: 'nom', label: 'Nom du motif', type: 'text', placeholder: 'Nom du motif' },
    { name: 'plafondKm', label: 'Plafond (km)', type: 'number', step: '1', min: '0', placeholder: 'ex: 200' },
    { name: 'coeffKm', label: 'Coeff. Km', type: 'number', step: '0.01', min: '0', placeholder: 'ex: 0.54' },
    { name: 'indemnite', label: 'Indemnité (€)', type: 'number', step: '0.01', min: '0', placeholder: 'ex: 150.00', isCurrency: true },
  ];

  const trajetFields = [
    { name: 'nom', label: 'Nom du trajet (ex: Domicile - Gare TGV)', type: 'text', placeholder: 'Nom du trajet' },
    { name: 'distance', label: 'Distance (km)', type: 'number', step: '1', min: '0', placeholder: 'ex: 45' },
  ];

  const handleSaveMotifClick = (motif) => {
    onSaveMotif(motif);
    setEditingMotif(null);
  };

  const handleDeleteMotifClick = () => {
    if (deletingMotif?.id) {
      onDeleteMotif(deletingMotif.id);
    }
    setDeletingMotif(null);
  };

  const handleSaveTrajetClick = (trajet) => {
    onSaveTrajet(trajet);
    setEditingTrajet(null);
  };

  const handleDeleteTrajetClick = () => {
    if (deletingTrajet?.id) {
      onDeleteTrajet(deletingTrajet.id);
    }
    setDeletingTrajet(null);
  };

  const sortedMotifs = useMemo(() => {
    return [...motifs].sort((a, b) => a.nom.localeCompare(b.nom, 'fr', { sensitivity: 'base' }));
  }, [motifs]);

  return (
    <div className="space-y-6">
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Nom</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Plafond (km)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Coefficient</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Indemnité</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
                  {sortedMotifs.length === 0 ? (
                    <tr><td colSpan="5" className="px-6 py-12 text-center text-zinc-500 dark:text-zinc-400">Aucun motif créé.</td></tr>
                  ) : (
                    sortedMotifs.map((motif) => (
                      <tr key={motif.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors duration-150">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900 dark:text-white">{motif.nom}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-600 dark:text-zinc-300">{motif.plafondKm} km</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-600 dark:text-zinc-300">{motif.coeffKm}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-600 dark:text-zinc-300">{new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(motif.indemnite)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                          <CodedButton variant="ghost" className="!p-2" onClick={() => setEditingMotif(motif)}><Edit2 size={16} /></CodedButton>
                          <CodedButton variant="ghost" className="!p-2 text-red-600 dark:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/50" onClick={() => setDeletingMotif(motif)}><Trash2 size={16} /></CodedButton>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

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
                    <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Nom du Trajet</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Distance (km)</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
                  {trajets.length === 0 ? (
                    <tr><td colSpan="3" className="px-6 py-12 text-center text-zinc-500 dark:text-zinc-400">Aucun trajet créé.</td></tr>
                  ) : (
                    trajets.map((trajet) => (
                      <tr key={trajet.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors duration-150">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900 dark:text-white">{trajet.nom}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-600 dark:text-zinc-300">{trajet.distance} km</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                          <CodedButton variant="ghost" className="!p-2" onClick={() => setEditingTrajet(trajet)}><Edit2 size={16} /></CodedButton>
                          <CodedButton variant="ghost" className="!p-2 text-red-600 dark:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/50" onClick={() => setDeletingTrajet(trajet)}><Trash2 size={16} /></CodedButton>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      <EntityEditModal
        show={!!editingMotif}
        title={editingMotif?.id ? 'Modifier le motif' : 'Nouveau motif'}
        entity={editingMotif}
        fields={motifFields}
        onClose={() => setEditingMotif(null)}
        onSave={handleSaveMotifClick}
        generateId={() => `motif_${Date.now()}`}
      />

      <EntityEditModal
        show={!!editingTrajet}
        title={editingTrajet?.id ? 'Modifier le trajet' : 'Nouveau trajet'}
        entity={editingTrajet}
        fields={trajetFields}
        onClose={() => setEditingTrajet(null)}
        onSave={handleSaveTrajetClick}
        generateId={() => `trajet_${Date.now()}`}
      />

      <ConfirmModal
        show={!!deletingMotif}
        onClose={() => setDeletingMotif(null)}
        onConfirm={handleDeleteMotifClick}
        title="Supprimer le motif"
        message={`Êtes-vous sûr de vouloir supprimer le motif "${deletingMotif?.nom}" ? Cette action est irréversible.`}
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
