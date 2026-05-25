import React, { useState, useRef, useEffect, memo } from 'react';
import { BarChart2, Settings as SettingsIcon, Sun, Moon } from 'lucide-react';
import { CodedButton } from './ui/CodedButton';

const HeaderComponent = ({ onNewConvocation, onSetPage, page, darkMode, onToggleDarkMode, availableYears, selectedYear, onSelectYear, isAuthenticated, userEmail, onAuthButtonClick }) => {
  const [showExportMenu, setShowExportMenu] = useState(false);
  const exportMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (exportMenuRef.current && !exportMenuRef.current.contains(event.target)) {
        setShowExportMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white dark:bg-zinc-800 shadow-md mb-8 p-4 rounded-lg flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:space-x-4 w-full sm:w-auto">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 text-center sm:text-left">
          RefFinances
        </h1>

        <nav className="flex items-center space-x-2 w-full sm:w-auto">
          <CodedButton
            variant={page === 'dashboard' ? 'secondary' : 'ghost'}
            onClick={() => onSetPage('dashboard')}
            className={`w-1/2 sm:w-auto justify-center ${page === 'dashboard' ? 'font-semibold bg-zinc-200 dark:bg-zinc-700' : 'font-normal'}`}
          >
            <BarChart2 size={16} className="mr-2" />
            Dashboard
          </CodedButton>
          <CodedButton
            variant={page === 'settings' ? 'secondary' : 'ghost'}
            onClick={() => onSetPage('settings')}
            className={`w-1/2 sm:w-auto justify-center ${page === 'settings' ? 'font-semibold bg-zinc-200 dark:bg-zinc-700' : 'font-normal'}`}
          >
            <SettingsIcon size={16} className="mr-2" />
            Paramètres
          </CodedButton>
        </nav>

        {page === 'dashboard' && availableYears.length > 0 && (
          <div className="w-full sm:w-auto">
            <label htmlFor="year-select" className="sr-only">Filtrer par année</label>
            <select
              id="year-select"
              value={selectedYear}
              onChange={(e) => onSelectYear(e.target.value)}
              className="w-full rounded-md border-zinc-300 dark:border-zinc-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm dark:bg-zinc-700 dark:text-white transition duration-200"
            >
              <option value="all">Toutes les années</option>
              {availableYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="flex items-center space-x-2 justify-center flex-wrap gap-2">
        <CodedButton variant="ghost" className="!p-2" onClick={onToggleDarkMode}>
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </CodedButton>

        <CodedButton variant="ghost" className="!p-2" onClick={onAuthButtonClick}>
          {isAuthenticated ? (userEmail || 'Profil') : 'Connexion'}
        </CodedButton>

        <CodedButton variant="solid" onClick={onNewConvocation} className="flex-grow sm:flex-grow-0">
          + Nouvelle Convocation
        </CodedButton>
      </div>
    </header>
  );
};

export const Header = memo(HeaderComponent);
