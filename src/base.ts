import util from 'util';

export default class Logger {
  protected parseargs(args: unknown[]): string[] {
    return args.map((item: unknown) => {
      if (typeof item === 'string') {
        return item;
      }

      return util.inspect(item, { colors: false, depth: null });
    });
  }

  protected prepareMessage(
    colour: string,
    prefix: string,
    args: unknown[]
  ): string {
    const colourCode = {
      green: '\x1b[32m',
      cyan: '\x1b[36m',
      yellow: '\x1b[33m',
      red: '\x1b[31m'
    }[colour];

    return `${colourCode}(${new Date().toLocaleTimeString()}) - \x1b[1m${prefix}\x1b[0m${colourCode} - ${this.parseargs(
      args
    ).join(' ')}`;
  }

  /**
   * Used for debugging in development mode, will throw an error if not in development mode
   * @param args what to log
   * @returns nothing
   * @example logger.debug('Hello World');
   */
  debug(...args: unknown[]): void {
    return;
  }

  /**
   * Used for any info
   * @param args what to log
   * @returns nothing
   * @example logger.info('Hello World');
   */
  info(...args: unknown[]): void {
    return;
  }

  /**
   * Used for any warning
   * @param args what to log
   * @returns nothing
   * @example logger.warn('Hello World');
   */
  warn(...args: unknown[]): void {
    return;
  }

  /**
   * Used for any error
   * @param args what to log
   * @returns nothing
   * @example logger.error('Hello World');
   */
  error(...args: unknown[]): void {
    return;
  }

  /**
   * Used for any fatal error, this will throw an error
   * @param args what to log
   * @returns nothing
   * @example logger.fatal('Hello World');
   * @throws Error
   */
  fatal(...args: unknown[]): void {
    return;
  }
}
