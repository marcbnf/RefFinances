import React, { useMemo, memo } from 'react';
import { Search, Trash2, BarChart2, CheckCircle } from 'lucide-react';
import { StatCard } from './ui/StatCard';
import { ConvocationItem } from './convocations/ConvocationItem';
import { ConvocationItemCard } from './convocations/ConvocationItemCard';
import { formatCurrency } from '../utils/finance';

const DashboardComponent = ({ convocations, onSelectConvocation, selectedIds, onSelectId, onSelectAll, onDeleteSelected, searchTerm, onSearchTermChange, selectedYear }) => {
  const selectedIdSet = useMemo(() => new Set(selectedIds), [selectedIds]);
  const stats = useMemo(() => {
    let totalDu = 0;
    let totalRecu = 0;
    convocations.forEach(conv => {
      if (Array.isArray(conv.depenses)) {
        totalDu += conv.depenses.reduce((acc, dep) => acc + (dep.du || 0), 0);
        totalRecu += conv.depenses.reduce((acc, dep) => acc + (dep.recu || 0), 0);
      }
    });
    const solde = totalRecu - totalDu;
    return { totalDu, totalRecu, solde };
  }, [convocations]);

  const isAllSelected = convocations.length > 0 && selectedIdSet.size === convocations.length;

  const noResultsMessage = searchTerm
    ? `Aucun résultat pour « ${searchTerm} ».`
    : selectedYear && selectedYear !== 'all'
    ? `Aucune convocation trouvée pour ${selectedYear}.`
    : 'Aucune convocation à afficher.';

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <StatCard title="Total Dû" value={formatCurrency(stats.totalDu)} icon={<BarChart2 size={22} />} />
        <StatCard title="Total Perçu" value={formatCurrency(stats.totalRecu)} icon={<CheckCircle size={22} />} />
        <StatCard title="Solde" value={formatCurrency(stats.solde)} icon={<BarChart2 size={22} />} />
      </div>

      <div className="relative mt-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-zinc-400" />
        </div>
        <input
          type="text"
          placeholder="Rechercher par numéro de convocation..."
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-zinc-300 rounded-md leading-5 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:placeholder-zinc-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
        />
      </div>

      {selectedIds.length > 0 && (
        <div className="bg-blue-600 dark:bg-blue-500 text-white rounded-lg shadow-md p-4 flex justify-between items-center animate-fade-in-sm">
          <p className="font-medium">
            {selectedIds.length} {selectedIds.length > 1 ? 'convocations sélectionnées' : 'convocation sélectionnée'}
          </p>
          <button onClick={onDeleteSelected} className="inline-flex items-center rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600">
            <Trash2 size={16} className="mr-2" />
            Supprimer la sélection
          </button>
        </div>
      )}

      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
        <div className="hidden sm:block overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700">
            <thead className="bg-zinc-50 dark:bg-zinc-700/50">
              <tr>
                <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    className="rounded border-zinc-300 dark:border-zinc-600 text-blue-600 focus:ring-blue-500 dark:bg-zinc-700 dark:checked:bg-blue-500"
                    checked={isAllSelected}
                    onChange={(e) => onSelectAll(e.target.checked)}
                    title="Tout sélectionner"
                  />
                </th>
                <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Numéro</th>
                <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Date</th>
                <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Motif</th>
                <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Montant Dû</th>
                <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Montant Perçu</th>
                <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
              {convocations.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-5 py-12 text-center text-zinc-500 dark:text-zinc-400">
                    {noResultsMessage}
                  </td>
                </tr>
              ) : (
                convocations.map(conv => (
                  <ConvocationItem
                    key={conv.id}
                    convocation={conv}
                    onSelectConvocation={onSelectConvocation}
                    isSelected={selectedIdSet.has(conv.id)}
                    onToggleSelect={onSelectId}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="block sm:hidden p-4 space-y-4 bg-zinc-50/50 dark:bg-zinc-900/50">
          <div className="px-1 py-2 flex items-center">
            <input
              type="checkbox"
              id="select-all-mobile"
              className="rounded border-zinc-300 dark:border-zinc-600 text-blue-600 focus:ring-blue-500 dark:bg-zinc-700 dark:checked:bg-blue-500 h-5 w-5"
              checked={isAllSelected}
              onChange={(e) => onSelectAll(e.target.checked)}
            />
            <label htmlFor="select-all-mobile" className="ml-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Tout sélectionner
            </label>
          </div>

          {convocations.length === 0 ? (
            <div className="px-5 py-12 text-center text-zinc-500 dark:text-zinc-400">{noResultsMessage}</div>
          ) : (
            convocations.map(conv => (
              <ConvocationItemCard
                key={conv.id}
                convocation={conv}
                onSelectConvocation={onSelectConvocation}
                isSelected={selectedIdSet.has(conv.id)}
                onToggleSelect={onSelectId}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export const Dashboard = memo(DashboardComponent);
