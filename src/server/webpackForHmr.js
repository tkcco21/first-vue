export default (app, rootDir) => {
  const webpack = require('webpack');
  // const DashboardPlugin = require('webpack-dashboard/plugin');
  const webpackConfig = require(`${rootDir}webpack.config.babel`).default;
  const compiler = webpack(webpackConfig);
  // compiler.apply(new DashboardPlugin());
  compiler.apply(new webpack.ProgressPlugin());
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    watchOptions: {
      ignored: ['node_modules'],
      aggregateTimeout: 300,
      poll: true
    }
  }));
  app.use(require('webpack-hot-middleware')(compiler));
};
