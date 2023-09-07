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
  events.emit('all', `(${new Date().toLocaleTimeString()})`, prefix, args.join(' '));
  return chalkStyle(`(${new Date().toLocaleTimeString()}) - ${chalk.bold(prefix)} - `, ...parseArguments(Array.prototype.slice.call(args)));;
};

const log = (...args) => {
  console.log(prepareMessage(chalk.white, '[LOG]', args));
};

const info = (...args) => {
  console.info(prepareMessage(chalk.cyan, '[INFO]', args));
};

const error = (...args) => {
  console.log(prepareMessage(chalk.red, '[ERROR]', args));
};

const fatal = (...args) => {
  console.log(prepareMessage(chalk.red, '[FATAL]', args));
};

const warn = (...args) => {
  console.warn(prepareMessage(chalk.yellow, '[WARN]', args));
};

const debug = (...args) => {
  console.debug(prepareMessage(chalk.green, '[DEBUG]', args));
};

const clear = () => {
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