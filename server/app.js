import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import createError from 'http-errors';
// import debug from 'debug';
// debug('first-vue:server')(path.resolve());

import adminRouter from './routes/admin'
import publicRouter from './routes/public'

const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv === 'development';

const app = express();

// =========================================================
if (isDev) {
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.config.babel.js').default;
  const compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}
// =========================================================

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

// view engine setup
app.set('views', path.join(__dirname, '../dist/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../dist')));

// app.get('/api/test', (req, res) => {
//   res.send({
//     message: "Hello World!!"
//   });
// });

app.use('/admin', adminRouter);
// app.use('/api', apiRouter);
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

module.exports = app;
