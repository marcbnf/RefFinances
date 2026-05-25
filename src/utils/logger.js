/**
 * Centralized logger with level-based console output
 * Usage: import logger from './utils/logger';
 * logger.info('Message', { data });
 */

const isDev = import.meta.env.DEV;

const logger = {
  debug: (message, data = null) => {
    if (!isDev) return;
    console.debug(`[DEBUG] ${message}`, data);
  },

  info: (message, data = null) => {
    console.info(`[INFO] ${message}`, data);
  },

  warn: (message, data = null) => {
    console.warn(`[WARN] ${message}`, data);
  },

  error: (message, error = null) => {
    console.error(`[ERROR] ${message}`, error);
  },
};

export default logger;
