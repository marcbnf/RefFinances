import React from 'react';

export const StatCard = ({ title, value, icon }) => (
  <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md flex items-center space-x-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300">
      {icon}
    </div>
    <div>
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{title}</p>
      <p className="text-2xl font-bold text-zinc-900 dark:text-white">{value}</p>
    </div>
  </div>
);
