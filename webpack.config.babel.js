import { VueLoaderPlugin } from 'vue-loader';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
// ↓Herokuではサーバーサイドでgzipに変換しないといけないので意味ない
// import CompressionPlugin from 'compression-webpack-plugin';
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
  devServer: {
    open: true,
    inline: true,
    hot: true,
    port: 8000,
    watchContentBase: true,
    contentBase: dist,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/views/index.html',
      chunks: ['public']
    }),
    new HtmlWebpackPlugin({
      filename: 'admin.html',
      template: 'src/views/admin.html',
      chunks: ['admin']
    }),
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
    public: [`${src}/js/public/app.js`],
    admin: [`${src}/js/admin/app.js`],
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
                  mixinsFiles: 'src/css/_helpers/_mixins.css'
                }),
                require('postcss-custom-media')({
                  importFrom: 'src/css/_helpers/_media.css'
                }),
                require('postcss-custom-properties')({
                  preserve: false,
                  importFrom: 'src/css/_helpers/_variables.css'
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

// NOTE: ↓はserver側のコードと同じリポジトリで管理していたときのもの
// NOTE: 今はwebpack-dev-serverでやってる
// if (isDev) {
//   config.entry.admin.unshift('webpack-hot-middleware/client?reload=true');
//   config.entry.public.unshift('webpack-hot-middleware/client?reload=true');
//   config.output = Object.assign({}, config.output, {
//     hotUpdateChunkFilename: 'js/.hot/[id].[hash].hot-update.js',
//     hotUpdateMainFilename: 'js/.hot/[hash].hot-update.json'
//   });
//   config.plugins.push(new webpack.HotModuleReplacementPlugin());
// }

export default config;
