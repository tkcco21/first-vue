import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import createError from 'http-errors';

import adminRouter from './routes/admin'
import publicRouter from './routes/public'
import apiRouter from './routes/api'

const debug = require('debug')('first-vue:server');
const nodeEnv = process.env.NODE_ENV;
const isDev = nodeEnv === 'development';

const rootDir = path.join(__dirname, '../../');

const app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// CORSを許可する
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH, OPTIONS');
  next();
});

// =========================================================
// For Hot Module Replacement
if (isDev) {
  const webpack = require('webpack');
  const webpackConfig = require(`${rootDir}webpack.config.babel`).default;
  const compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    watchOptions: {
      ignored: ['node_modules'],
      aggregateTimeout: 300,
      poll: true
    }
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}
// =========================================================

// view engine setup
app.set('views', `${rootDir}dist/views/`);
app.set('view engine', 'ejs');

app.use(express.static(`${rootDir}dist/`));

app.use('/admin', adminRouter);
app.use('/api', apiRouter);
app.use('/', publicRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404, "The page is not found..."));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // console.log(res.locals);

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = require('http').createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log(' ');
  console.log('>> ====================================');
  debug(process.env.NODE_ENV);
  debug(__dirname);
  debug('Listening on ' + bind);
  debug('https://dev.first-vue.com');
  console.log('>> ====================================');
  console.log(' ');
}

