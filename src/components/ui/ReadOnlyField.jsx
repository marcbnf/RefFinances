import React from 'react';

export const ReadOnlyField = ({ label, value, description }) => (
  <div className="w-full">
    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
      {label}
    </label>
    <div className="mt-1">
      <p className="block w-full rounded-md border-0 py-1.5 px-3 text-zinc-900 dark:text-white shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-600 bg-zinc-50 dark:bg-zinc-700/50 sm:text-sm h-[38px] flex items-center">
        {value || '-'}
      </p>
      {description && <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400">{description}</p>}
    </div>
  </div>
);
