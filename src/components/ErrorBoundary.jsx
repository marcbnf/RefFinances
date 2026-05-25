import React from 'react';
import logger from '../utils/logger';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    logger.error('[ErrorBoundary] Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-zinc-100 dark:bg-zinc-900">
          <div className="max-w-xl w-full bg-white dark:bg-zinc-800 shadow-lg rounded-2xl p-6 text-zinc-900 dark:text-zinc-100">
            <h1 className="text-2xl font-semibold mb-4">Oups... une erreur est survenue.</h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              Le chargement de l’application a échoué. Vous pouvez recharger la page ou revenir plus tard.
            </p>
            <div className="mb-4 rounded-md bg-zinc-100 dark:bg-zinc-900 p-3 overflow-auto text-xs text-zinc-700 dark:text-zinc-200">
              {String(this.state.error)}
            </div>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Recharger
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
