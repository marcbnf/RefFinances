import React, { memo } from 'react';
import { StatusPill } from '../ui/StatusPill';
import { formatCurrency, getConvocationStatus, getTotalDepense } from '../../utils/finance';

const ConvocationItemCardComponent = ({ convocation, onSelectConvocation, onToggleSelect, isSelected }) => {
  const totalDu = getTotalDepense(convocation, 'du');
  const totalRecu = getTotalDepense(convocation, 'recu');
  const status = getConvocationStatus(convocation);

  return (
    <div
      onClick={() => onSelectConvocation(convocation)}
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

export const ConvocationItemCard = memo(ConvocationItemCardComponent);
