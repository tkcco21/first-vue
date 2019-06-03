import webpack from 'webpack';
import webpackConfig from '../../webpack.config.babel';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

export default (app, rootDir) => {
  // const DashboardPlugin = require('webpack-dashboard/plugin');
  const compiler = webpack(webpackConfig);
  // compiler.apply(new DashboardPlugin());
  compiler.apply(new webpack.ProgressPlugin());
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    watchOptions: {
      ignored: ['node_modules'],
      aggregateTimeout: 300,
      poll: true
    }
  }));
  app.use(webpackHotMiddleware(compiler));
};
