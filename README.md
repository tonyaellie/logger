# logger

Logger for Tonya's projects.

## Usage

### Installation

With `npm`:

``` text
npm install @greencoast/logger
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

### EVENT

```js
logger.events.on('all', (time, prefix, msg) => {
  do.something(`${time} - ${prefix} - ${msg}`)
});
```