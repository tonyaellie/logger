const chalk = require('chalk');
const util = require('util');
const EventEmitter = require('events');

class loggerEvents extends EventEmitter {}

const events = new loggerEvents();

const parseArguments = (args) => {
  return args.map((item) => {
    if (typeof item === 'string') {
      return item;
    }

    return util.inspect(item, { colors: false, depth: null });
  });
};

const prepareMessage = (chalkStyle, prefix, args) => {
  return chalkStyle(`(${new Date().toLocaleTimeString()}) - ${chalk.bold(prefix)} - `, ...parseArguments(Array.prototype.slice.call(args)));;
};

const emitEvent= (type, prefix, args) => {
  events.emit('all', `(${new Date().toLocaleTimeString()})`, prefix, args.join(' '));
  events.emit(type, `(${new Date().toLocaleTimeString()})`, prefix, args.join(' '));
};

const log = (...arguments) => {
  emitEvent('log', '[LOG]', arguments)
  console.log(prepareMessage(chalk.white, '[LOG]', arguments));
};

const info = (...arguments) => {
  emitEvent('info', '[INFO]', arguments)
  console.info(prepareMessage(chalk.cyan, '[INFO]', arguments));
};

const error = (...arguments) => {
  emitEvent('error', '[ERROR]', arguments)
  console.error(prepareMessage(chalk.red, '[ERROR]', arguments));
};

const fatal = (...arguments) => {
  emitEvent('log', '[LOG]', arguments)
  console.error(prepareMessage(chalk.red, '[FATAL]', arguments));
};

const warn = (...arguments) => {
  emitEvent('warn', '[WARN]', arguments)
  console.warn(prepareMessage(chalk.yellow, '[WARN]', arguments));
};

const debug = (...arguments) => {
  emitEvent('debug', '[DEBUG]', arguments)
  console.debug(prepareMessage(chalk.green, '[DEBUG]', arguments));
};

const clear = () => {
  events.emit('clear');
  console.clear();
};

module.exports = {
  events,
  log,
  info,
  error,
  fatal,
  warn,
  debug,
  clear
};