import { VueLoaderPlugin } from 'vue-loader';
import webpack from 'webpack';
import path from 'path';
import CompressionPlugin from 'compression-webpack-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';
import StatsPlugin from 'stats-webpack-plugin';
// import HardSourceWebpackPlugin from 'hard-source-webpack-plugin';
// import Jarvis from 'webpack-jarvis';

const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv === 'development';

const src = path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, './dist');

const config = {
  mode: nodeEnv,
  devtool: isDev ? 'eval-source-map' : 'eval',
  resolve: {
    extensions: ['.vue', '.js', '.json', '.css'],
  },
  plugins: [
    new VueLoaderPlugin(),
    new WebpackNotifierPlugin({
      excludeWarnings: true,
      title: 'First Vue'
    }),
    new StatsPlugin('stats.json', {
      chunkModules: true,
    }),
    // new Jarvis({ port: 1337 }),
  ],
  entry: {
    public: ['./src/client/js/public/app.js'],
    admin: ['./src/client/js/admin/app.js'],
    // test: ['./src/client/js/test/app.js']
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: dist,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|vue)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: { failOnError: false }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      },
      {
        test: /\.(post)?css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: isDev, importLoaders: 1 },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDev,
              plugins: () => [
                require('postcss-import')(),
                require('postcss-mixins')({
                  mixinsFiles: 'src/client/css/_helpers/_mixins.css'
                }),
                require('postcss-custom-media')({
                  importFrom: 'src/client/css/_helpers/_media.css'
                }),
                require('postcss-custom-properties')({
                  preserve: false,
                  importFrom: 'src/client/css/_helpers/_variables.css'
                }),
                require('postcss-nested')(),
                require('postcss-color-function')(),
                require('autoprefixer')(),
              ],
            },
          },
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      }
    ]
  }
};

if (isDev) {
  config.entry.admin.unshift('webpack-hot-middleware/client?reload=true');
  config.entry.public.unshift('webpack-hot-middleware/client?reload=true');
  config.output = Object.assign({}, config.output, {
    hotUpdateChunkFilename: 'js/.hot/[id].[hash].hot-update.js',
    hotUpdateMainFilename: 'js/.hot/[hash].hot-update.json'
  });
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
} else {
  // config.plugins.push(new CompressionPlugin({
  //   test: /\.(css)|(js)$/,
  //   compressionOptions: { level: 9 },
  // }));
}

export default config;
