import React, { createContext, useContext, useMemo } from 'react';
import { useFirestoreCollection } from '../hooks/useFirestoreCollection';
import * as appDataService from '../services/appDataService';

const AppDataContext = createContext(null);

export const AppDataProvider = ({ children }) => {
  const {
    data: convocations,
    error: convocationsError,
    loading: convocationsLoading,
  } = useFirestoreCollection(appDataService.convocationsQuery);
  const { data: motifs, error: motifsError, loading: motifsLoading } = useFirestoreCollection(
    appDataService.motifsQuery
  );
  const { data: trajets, error: trajetsError, loading: trajetsLoading } = useFirestoreCollection(
    appDataService.trajetsQuery
  );

  const error = convocationsError || motifsError || trajetsError;
  const isLoading = convocationsLoading || motifsLoading || trajetsLoading;

  const contextValue = useMemo(
    () => ({
      convocations,
      motifs,
      trajets,
      error,
      isLoading,
      addConvocation: appDataService.addConvocation,
      updateConvocation: appDataService.updateConvocation,
      deleteConvocation: appDataService.deleteConvocation,
      deleteConvocationFile: appDataService.deleteConvocationFile,
      deleteSelectedConvocations: appDataService.deleteSelectedConvocations,
      saveMotif: appDataService.saveMotif,
      deleteMotif: appDataService.deleteMotif,
      saveTrajet: appDataService.saveTrajet,
      deleteTrajet: appDataService.deleteTrajet,
    }),
    [convocations, motifs, trajets, error, isLoading]
  );

  return <AppDataContext.Provider value={contextValue}>{children}</AppDataContext.Provider>;
};

export const useAppData = () => {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error('useAppData must be used within an AppDataProvider');
  }
  return context;
};
