import React, { useState, useEffect } from 'react';
import { CodedButton } from './ui/CodedButton';
import { FormInput } from './ui/FormInput';
import { Modal } from './ui/Modal';

export const AuthModal = ({ show, onClose, isAuthenticated, userEmail, onSignIn, onSignOut, onSendReset }) => {
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
    <Modal show={show} title="Connexion" onClose={onClose} className="max-w-md">
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
    </Modal>
  );
};
