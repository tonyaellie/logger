# logger

Logger for Tonya's projects.

## Usage

### Installation

With `npm`:

``` text
npm install @tonyaellie/logger
```

### Logging Messages

You can log multiple types of messages. Objects will be serialized and stack traces will be shown.

#### LOG

``` js
logger.log('message to log');
```

#### INFO

``` js
logger.info('message to log');
```

#### WARN

``` js
logger.warn('message to log');
```

#### ERROR

``` js
logger.error('message to log');
```

#### FATAL

``` js
logger.fatal('message to log');
```

#### DEBUG

``` js
logger.debug('message to log');
```

### Clear Console

You can clear the console with:

``` js
logger.clear();
```

### Events

Events are emitted for all logging and for clearing the console.

#### All Logging

``` js
logger.events.on('all', (time, prefix, msg) => {
  do.something(`${time} - ${prefix} - ${msg}`)
});
```

#### LOG

``` js
logger.events.on('log', (time, prefix, msg) => {
  do.something(`${time} - ${prefix} - ${msg}`)
});
```

#### INFO

``` js
logger.events.on('info', (time, prefix, msg) => {
  do.something(`${time} - ${prefix} - ${msg}`)
});
```

#### WARN

``` js
logger.events.on('warn', (time, prefix, msg) => {
  do.something(`${time} - ${prefix} - ${msg}`)
});
```

#### ERROR

``` js
logger.events.on('error', (time, prefix, msg) => {
  do.something(`${time} - ${prefix} - ${msg}`)
});
```

#### FATAL

``` js
logger.events.on('fatal', (time, prefix, msg) => {
  do.something(`${time} - ${prefix} - ${msg}`)
});
```

#### DEBUG

``` js
logger.events.on('debug', (time, prefix, msg) => {
  do.something(`${time} - ${prefix} - ${msg}`)
});
```

#### Cleared Console

``` js
logger.events.on('clear', () => {
  do.something()
});
```