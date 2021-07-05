const chalk = require('chalk');
const logger = require('../build/index');

test('logger log string', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  const handler = jest.fn();

  logger.events.on('all', handler);
  logger.events.on('logger-log', handler);

  logger.log('test');

  expect(consoleSpy).toHaveBeenCalledWith(
    chalk.white(
      `(${new Date().toLocaleTimeString()}) - ${chalk.bold('[LOG]')} - test`
    )
  );
  expect(handler).toBeCalledTimes(2);
});

test('logger log object', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  const handler = jest.fn();

  logger.events.on('all', handler);
  logger.events.on('logger-log', handler);

  logger.log({
    test: 'test'
  });

  expect(consoleSpy).toHaveBeenCalledWith(
    chalk.white(
      `(${new Date().toLocaleTimeString()}) - ${chalk.bold(
        '[LOG]'
      )} - { test: 'test' }`
    )
  );
});

test('logger info string', () => {
  const consoleSpy = jest.spyOn(console, 'info');
  const handler = jest.fn();

  logger.events.on('all', handler);
  logger.events.on('logger-info', handler);

  logger.info('test');

  expect(consoleSpy).toHaveBeenCalledWith(
    chalk.cyan(
      `(${new Date().toLocaleTimeString()}) - ${chalk.bold('[INFO]')} - test`
    )
  );
});

test('logger error string', () => {
  const consoleSpy = jest.spyOn(console, 'error');
  const handler = jest.fn();

  logger.events.on('all', handler);
  logger.events.on('logger-error', handler);

  logger.error('test');

  expect(consoleSpy).toHaveBeenCalledWith(
    chalk.red(
      `(${new Date().toLocaleTimeString()}) - ${chalk.bold('[ERROR]')} - test`
    )
  );
});

test('logger fatal string', () => {
  const consoleSpy = jest.spyOn(console, 'error');
  const handler = jest.fn();

  logger.events.on('all', handler);
  logger.events.on('logger-fatal', handler);

  logger.fatal('test');

  expect(consoleSpy).toHaveBeenCalledWith(
    chalk.red(
      `(${new Date().toLocaleTimeString()}) - ${chalk.bold('[FATAL]')} - test`
    )
  );
});

test('logger warn string', () => {
  const consoleSpy = jest.spyOn(console, 'warn');
  const handler = jest.fn();

  logger.events.on('all', handler);
  logger.events.on('logger-warn', handler);

  logger.warn('test');

  expect(consoleSpy).toHaveBeenCalledWith(
    chalk.yellow(
      `(${new Date().toLocaleTimeString()}) - ${chalk.bold('[WARN]')} - test`
    )
  );
});

test('logger debug string', () => {
  const consoleSpy = jest.spyOn(console, 'debug');
  const handler = jest.fn();

  logger.events.on('all', handler);
  logger.events.on('logger-debug', handler);

  logger.debug('test');

  expect(consoleSpy).toHaveBeenCalledWith(
    chalk.green(
      `(${new Date().toLocaleTimeString()}) - ${chalk.bold('[DEBUG]')} - test`
    )
  );
});

test('logger clear string', () => {
  const consoleSpy = jest.spyOn(console, 'clear');
  const handler = jest.fn();

  logger.events.on('logger-clear', handler);

  logger.clear();

  expect(consoleSpy).toBeCalledTimes(1);
});
