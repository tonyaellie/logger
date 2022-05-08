import type Logger from './base';
import ProdLogger from './prod';
import DevLogger from './dev';

/**
 * Returns a logger instance based on the environment.
 * @param prod true to use production logger, false to use development logger
 * @param url where to send logs to in production
 * @returns {Logger} logger instance
 */
export const initLogger = (prod?: boolean, url?: string): Logger => {
  // detect if in the production environment
  const isProd = prod || process.env.NODE_ENV === 'production';
  // get url
  const prodUrl = url || process.env.LOGGER_URL;
  if (isProd) {
    if (!prodUrl) {
      throw new Error('Url is required for production.');
    }
    return new ProdLogger(prodUrl);
  } else {
    return new DevLogger();
  }
};
