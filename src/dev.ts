import Logger from './base';

export default class DevLogger extends Logger {
  constructor() {
    super();
  }

  debug(...args: unknown[]): void {
    console.debug(super.prepareMessage('green', '[DEBUG]', args));
  }

  info(...args: unknown[]): void {
    console.info(super.prepareMessage('cyan', '[INFO]', args));
  }

  warn(...args: unknown[]): void {
    console.warn(super.prepareMessage('yellow', '[WARN]', args));
  }

  error(...args: unknown[]): void {
    console.error(super.prepareMessage('red', '[ERROR]', args));
  }

  fatal(...args: unknown[]): void {
    throw new Error(super.prepareMessage('red', '[FATAL]', args));
  }
}
