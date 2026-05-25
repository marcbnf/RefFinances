import React from 'react';
import { CodedButton } from './CodedButton';

export const Modal = ({ show, title, onClose, footer, children, closeText = 'Fermer', className = '' }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-[60] flex justify-center items-center p-4 backdrop-blur-sm animate-fade-in safe-padding-modal">
      <div className={`bg-white dark:bg-zinc-800 rounded-lg shadow-xl w-full max-w-2xl animate-scale-in overflow-hidden ${className}`}>
        <div className="flex justify-between items-center p-4 border-b dark:border-zinc-700">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-white">{title}</h3>
          <CodedButton variant="ghost" onClick={onClose} className="!p-2">
            {closeText}
          </CodedButton>
        </div>

        <div className="p-6">{children}</div>

        {footer && <div className="bg-zinc-50 dark:bg-zinc-800 px-6 py-4 rounded-b-lg">{footer}</div>}
      </div>
    </div>
  );
};
