import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Settings } from './components/Settings';
import { AuthModal } from './components/AuthModal';
import { ConvocationForm } from './components/convocations/ConvocationForm';
import { ConvocationModal } from './components/convocations/ConvocationModal';
import { ConfirmModal } from './components/ui/ConfirmModal';
import { useDarkMode } from './hooks/useDarkMode';
import { useAuth } from './context/AuthContext';
import { useAppData } from './context/AppDataContext';
import logger from './utils/logger';

export default function App() {
  const [page, setPage] = useState('dashboard');
  const [showConvocationForm, setShowConvocationForm] = useState(false);
  const [selectedConvocation, setSelectedConvocation] = useState(null);
  const [editingConvocation, setEditingConvocation] = useState(null);
  const [deletingConvocation, setDeletingConvocation] = useState(null);
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [dataLoadError, setDataLoadError] = useState(null);
  const [selectedConvocationIds, setSelectedConvocationIds] = useState([]);
  const [deletingMultiple, setDeletingMultiple] = useState(false);
  const [selectedYear, setSelectedYear] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const { authUser, isAuthenticated, signIn, signOut, sendResetEmail } = useAuth();
  const {
    convocations,
    motifs,
    trajets,
    error: dataError,
    isLoading,
    addConvocation,
    updateConvocation,
    deleteConvocation,
    deleteConvocationFile,
    deleteSelectedConvocations,
    saveMotif,
    deleteMotif,
    saveTrajet,
    deleteTrajet,
  } = useAppData();

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [fileDeletionError, setFileDeletionError] = useState(null);

  useEffect(() => {
    if (dataError) {
      setDataLoadError(
        'Erreur lors de la connexion à Firestore: ' +
          (dataError?.message || dataError?.code || 'unknown')
      );
    } else {
      setDataLoadError(null);
    }
  }, [dataError]);

  const openAuthModal = useCallback(() => setAuthModalOpen(true), []);
  const closeAuthModal = useCallback(() => setAuthModalOpen(false), []);

  const handleAddConvocation = useCallback(async (convocation) => {
    try {
      await addConvocation(convocation);
    } catch (error) {
      logger.error('Erreur ajout convocation:', error);
      throw error;
    }
  }, [addConvocation]);

  const handleUpdateConvocation = useCallback(async (convocation) => {
    try {
      await updateConvocation(convocation);
    } catch (error) {
      logger.error('Erreur maj convocation:', error);
      throw error;
    }
  }, [updateConvocation]);

  const handleDeleteConvocation = useCallback(async () => {
    if (!deletingConvocation) return;
    try {
      await deleteConvocation(deletingConvocation);
      setDeletingConvocation(null);
      setSelectedConvocation(null);
    } catch (error) {
      logger.error('Erreur suppression convocation:', error);
      setFileDeletionError(error?.code ? `Erreur lors de la suppression: ${error.code}` : 'Erreur lors de la suppression de la convocation.');
    }
  }, [deleteConvocation, deletingConvocation]);

  const handleDeleteConvocationFile = useCallback(async (convocation) => {
    if (!convocation?.filePath) return;
    try {
      await deleteConvocationFile(convocation);
    } catch (error) {
      logger.error('Erreur suppression fichier:', error);
      setFileDeletionError(`Impossible de supprimer le fichier: ${convocation.fileName || convocation.filePath}. (${error?.code || error?.message})`);
      throw error;
    }
  }, [deleteConvocationFile]);

  const handleSaveMotif = useCallback(async (motif) => {
    try {
      await saveMotif(motif);
    } catch (error) {
      logger.error('Erreur sauvegarde motif:', error);
    }
  }, [saveMotif]);

  const handleDeleteMotif = useCallback(async (motifId) => {
    try {
      await deleteMotif(motifId);
    } catch (error) {
      logger.error('Erreur suppression motif:', error);
    }
  }, [deleteMotif]);

  const handleSaveTrajet = useCallback(async (trajet) => {
    try {
      await saveTrajet(trajet);
    } catch (error) {
      logger.error('Erreur sauvegarde trajet:', error);
    }
  }, [saveTrajet]);

  const handleDeleteTrajet = useCallback(async (trajetId) => {
    try {
      await deleteTrajet(trajetId);
    } catch (error) {
      logger.error('Erreur suppression trajet:', error);
    }
  }, [deleteTrajet]);

  const handleDeleteSelectedConvocations = useCallback(async () => {
    if (selectedConvocationIds.length === 0) return;
    try {
      await deleteSelectedConvocations(selectedConvocationIds, convocations);
      setSelectedConvocationIds([]);
      setDeletingMultiple(false);
    } catch (error) {
      logger.error('Erreur lors de la suppression des convocations sélectionnées:', error);
    }
  }, [deleteSelectedConvocations, selectedConvocationIds, convocations]);

  const handleOpenConvocationForm = useCallback((convocation = null) => {
    setEditingConvocation(convocation);
    setShowConvocationForm(true);
    setSelectedConvocation(null);
  }, []);

  const handleSelectConvocation = useCallback((convocation) => {
    setSelectedConvocation(convocation);
  }, []);

  const openSelectionDeletion = useCallback(() => setDeletingMultiple(true), []);

  const handleToggleDarkMode = useCallback(() => {
    toggleDarkMode();
  }, [toggleDarkMode]);

  const handleSelectId = useCallback((id) => {
    setSelectedConvocationIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  }, []);

  const filteredAndSortedConvocations = useMemo(() => {
    const yearFiltered = selectedYear === 'all'
      ? convocations
      : convocations.filter(c => new Date(c.date).getFullYear().toString() === selectedYear);
    const searchFiltered = !searchTerm
      ? yearFiltered
      : yearFiltered.filter(c => c.numero.toLowerCase().includes(searchTerm.toLowerCase()));
    return [...searchFiltered].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [convocations, selectedYear, searchTerm]);

  const availableYears = useMemo(() => {
    const years = new Set(convocations.map(c => new Date(c.date).getFullYear().toString()));
    return Array.from(years).sort((a, b) => b - a);
  }, [convocations]);

  const handleSelectAll = useCallback((checked) => {
    if (checked) {
      setSelectedConvocationIds(filteredAndSortedConvocations.map(c => c.id));
    } else {
      setSelectedConvocationIds([]);
    }
  }, [filteredAndSortedConvocations]);

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
          onNewConvocation={handleOpenConvocationForm}
          onSetPage={setPage}
          page={page}
          darkMode={darkMode}
          onToggleDarkMode={handleToggleDarkMode}
          availableYears={availableYears}
          selectedYear={selectedYear}
          onSelectYear={setSelectedYear}
          isAuthenticated={isAuthenticated}
          userEmail={authUser?.email}
          onAuthButtonClick={openAuthModal}
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
            onDeleteSelected={openSelectionDeletion}
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
            selectedYear={selectedYear}
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
        onSignIn={signIn}
        onSignOut={signOut}
        onSendReset={sendResetEmail}
      />
    </div>
  );
}
