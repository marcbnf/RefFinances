import React, { memo } from 'react';
import { StatusPill } from '../ui/StatusPill';
import { formatCurrency, getConvocationStatus, getTotalDepense } from '../../utils/finance';

const ConvocationItemComponent = ({ convocation, onSelectConvocation, onToggleSelect, isSelected }) => {
  const totalDu = getTotalDepense(convocation, 'du');
  const totalRecu = getTotalDepense(convocation, 'recu');
  const status = getConvocationStatus(convocation);

  const handleRowClick = (e) => {
    if (e.target.type === 'checkbox') return;
    onSelectConvocation(convocation);
  };

  return (
    <tr onClick={handleRowClick} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/60 cursor-pointer border-b border-zinc-200 dark:border-zinc-700 transition-colors duration-150">
      <td className="px-5 py-4 text-sm font-medium text-zinc-900 dark:text-white">
        <input
          type="checkbox"
          className="rounded border-zinc-300 dark:border-zinc-600 text-blue-600 focus:ring-blue-500 dark:bg-zinc-700 dark:checked:bg-blue-500"
          checked={isSelected}
          onChange={() => onToggleSelect(convocation.id)}
          onClick={(e) => e.stopPropagation()}
        />
      </td>
      <td className="px-5 py-4 text-sm font-medium text-zinc-900 dark:text-white">
        {convocation.numero}
      </td>
      <td className="px-5 py-4 text-sm text-zinc-600 dark:text-zinc-300">
        {new Date(convocation.date).toLocaleDateString('fr-FR')}
      </td>
      <td className="px-5 py-4 text-sm text-zinc-600 dark:text-zinc-300">
        {convocation.motifNom || 'N/A'}
      </td>
      <td className="px-5 py-4 text-sm font-semibold text-zinc-900 dark:text-white">
        {formatCurrency(totalDu)}
      </td>
      <td className="px-5 py-4 text-sm font-semibold text-green-600 dark:text-green-400">
        {formatCurrency(totalRecu)}
      </td>
      <td className="px-5 py-4 text-sm">
        <StatusPill status={status} />
      </td>
    </tr>
  );
};

export const ConvocationItem = memo(ConvocationItemComponent);
