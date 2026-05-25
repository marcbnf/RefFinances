import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { auth } from '../firebase';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
} from 'firebase/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [authProcessing, setAuthProcessing] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
      setIsAuthenticated(!!user);
    });

    return unsubscribe;
  }, []);

  const signIn = useCallback(async (email, password) => {
    setAuthProcessing(true);
    setAuthError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setAuthError(error?.message || 'Erreur lors de la connexion');
      throw error;
    } finally {
      setAuthProcessing(false);
    }
  }, []);

  const signOut = useCallback(async () => {
    setAuthProcessing(true);
    setAuthError(null);

    try {
      await firebaseSignOut(auth);
    } catch (error) {
      setAuthError(error?.message || 'Erreur lors de la déconnexion');
      throw error;
    } finally {
      setAuthProcessing(false);
    }
  }, []);

  const sendResetEmail = useCallback(async (email) => {
    setAuthProcessing(true);
    setAuthError(null);

    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      setAuthError(error?.message || 'Erreur lors de l envoi du mail');
      throw error;
    } finally {
      setAuthProcessing(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authUser,
        isAuthenticated,
        authError,
        authProcessing,
        signIn,
        signOut,
        sendResetEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
