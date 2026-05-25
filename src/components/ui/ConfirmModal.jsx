import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Modal } from './Modal';
import { CodedButton } from './CodedButton';

export const ConfirmModal = ({ show, onClose, onConfirm, title, message }) => {
  if (!show) return null;

  return (
    <Modal
      show={show}
      title={title}
      onClose={onClose}
      footer={
        <div className="flex justify-end space-x-3">
          <CodedButton variant="secondary" onClick={onClose}>Annuler</CodedButton>
          <CodedButton variant="danger" onClick={onConfirm}>Supprimer</CodedButton>
        </div>
      }
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/50">
          <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" aria-hidden="true" />
        </div>
        <div className="text-left">
          <p className="text-sm text-zinc-600 dark:text-zinc-300">{message}</p>
        </div>
      </div>
    </Modal>
  );
};
