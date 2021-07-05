/* eslint-disable no-console */
import chalk from 'chalk';
import util from 'util';
import EventEmitter from 'events';

class loggerEvents extends EventEmitter {}

const events = new loggerEvents();

const parseargs = (args: unknown[]): string[] => {
  return args.map((item: unknown) => {
    if (typeof item === 'string') {
      return item;
    }

    return util.inspect(item, { colors: false, depth: null });
  });
};

const prepareMessage = (
  chalkStyle: chalk.Chalk,
  prefix: string,
  args: unknown[]
): string => {
  return chalkStyle(
    `(${new Date().toLocaleTimeString()}) - ${chalk.bold(prefix)} -`,
    ...parseargs(Array.prototype.slice.call(args))
  );
};

const emitEvent = (type: string, prefix: string, args: unknown[]): void => {
  events.emit(
    'all',
    `(${new Date().toLocaleTimeString()})`,
    prefix,
    args.join(' ')
  );
  events.emit(
    type,
    `(${new Date().toLocaleTimeString()})`,
    prefix,
    args.join(' ')
  );
};

const log = (...args: unknown[]): void => {
  emitEvent('logger-log', '[LOG]', args);
  console.log(prepareMessage(chalk.white, '[LOG]', args));
};

const info = (...args: unknown[]): void => {
  emitEvent('logger-info', '[INFO]', args);
  console.info(prepareMessage(chalk.cyan, '[INFO]', args));
};

const error = (...args: unknown[]): void => {
  emitEvent('logger-error', '[ERROR]', args);
  console.error(prepareMessage(chalk.red, '[ERROR]', args));
};

const fatal = (...args: unknown[]): void => {
  emitEvent('logger-fatal', '[FATAL]', args);
  console.error(prepareMessage(chalk.red, '[FATAL]', args));
};

const warn = (...args: unknown[]): void => {
  emitEvent('logger-warn', '[WARN]', args);
  console.warn(prepareMessage(chalk.yellow, '[WARN]', args));
};

const debug = (...args: unknown[]): void => {
  emitEvent('logger-debug', '[DEBUG]', args);
  console.debug(prepareMessage(chalk.green, '[DEBUG]', args));
};

const clear = (): void => {
  events.emit('logger-clear');
  console.clear();
};

export = {
  events,
  log,
  info,
  error,
  fatal,
  warn,
  debug,
  clear
};
