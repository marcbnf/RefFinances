/**
 * Firebase Error Utility — Centralized error message mapping
 * Usage: import { getFirebaseErrorMessage } from './utils/firebaseErrors';
 */

const ErrorMessages = {
  'permission-denied': 'Accès refusé. Vérifiez vos permissions Firestore et les règles de sécurité.',
  'unavailable': 'Service indisponible. Vérifiez votre connexion réseau.',
  'unauthenticated': 'Vous devez être connecté pour effectuer cette action.',
  'not-found': 'Ressource introuvable.',
  'already-exists': 'Cette ressource existe déjà.',
  'invalid-argument': 'Argument invalide.',
  'failed-precondition': 'Condition préalable non remplie.',
  'out-of-range': 'Valeur hors limites.',
  'unimplemented': 'Fonctionnalité non implémentée.',
  'internal': 'Erreur interne du serveur.',
  'deadline-exceeded': 'Délai d\'attente dépassé. Vérifiez votre connexion.',
  'auth/invalid-email': 'Adresse email invalide.',
  'auth/user-not-found': 'Utilisateur non trouvé.',
  'auth/wrong-password': 'Mot de passe incorrect.',
  'auth/email-already-in-use': 'Cet email est déjà utilisé.',
  'auth/weak-password': 'Le mot de passe est trop faible.',
  'storage/unauthorized': 'Accès refusé au stockage.',
  'storage/retry-limit-exceeded': 'Téléversement interrompu après plusieurs tentatives — vérifiez votre connexion réseau.',
};

export const getFirebaseErrorMessage = (error) => {
  if (!error) return 'Une erreur inconnue s\'est produite.';

  const code = error?.code || '';
  return ErrorMessages[code] || error?.message || 'Une erreur inconnue s\'est produite.';
};

export const isNetworkError = (error) => {
  const code = error?.code || '';
  return code === 'unavailable' || code === 'deadline-exceeded' || code === 'network-request-failed';
};

export const isAuthError = (error) => {
  const code = error?.code || '';
  return code.startsWith('auth/');
};
