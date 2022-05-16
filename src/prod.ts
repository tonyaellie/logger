import Logger from './base';
import http from 'http';

export default class ProdLogger extends Logger {
  private url: string;
  constructor(url: string) {
    super();
    this.url = url;
  }

  private sendLog(type: string, ...args: unknown[]): Promise<boolean> {
    return new Promise((resolve) => {
      try {
        const req = http.get(
          `${this.url}/?type=${type}&message=${Buffer.from(
            this.parseargs(args).join(' ').substring(0, 1000)
          ).toString('base64')}`,
          (res) => {
            // if there is an error switch to local logging
            if (res.statusCode !== 200) {
              resolve(false);
            }

            resolve(true);
          }
        );
        req.on('error', () => {
          resolve(false);
        });
        req.end();
      } catch {
        resolve(false);
      }
    });
  }

  debug(): void {
    // throw error to avoid debug logging in production
    throw new Error('Debug logging is not allowed in production');
  }

  info(...args: unknown[]): void {
    (async () => {
      if (!(await this.sendLog('info', ...args))) {
        console.log(super.prepareMessage('cyan', '[INFO]', args));
      }
    })();
  }

  warn(...args: unknown[]): void {
    (async () => {
      if (!(await this.sendLog('warn', ...args))) {
        console.log(super.prepareMessage('yellow', '[WARN]', args));
      }
    })();
  }

  error(...args: unknown[]): void {
    (async () => {
      if (!(await this.sendLog('error', ...args))) {
        console.log(super.prepareMessage('red', '[ERROR]', args));
      }
    })();
  }

  fatal(...args: unknown[]): void {
    (async () => {
      await this.sendLog('fatal', ...args);
      throw new Error(super.prepareMessage('red', '[FATAL]', args));
    })();
  }
}
