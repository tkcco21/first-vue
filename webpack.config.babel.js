import { VueLoaderPlugin } from 'vue-loader';
import webpack from 'webpack';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';
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
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new WebpackNotifierPlugin({
      excludeWarnings: true,
      title: 'First Vue'
    }),
    // new Jarvis({ port: 1337 }),
  ],
  entry: {
    public: ['./src/client/js/public/app.js'],
    admin: ['./src/client/js/admin/app.js']
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
        test: /\.css$/,
        use: [
          isDev ? 'vue-style-loader' : {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1 },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [
                require('postcss-import')(),
                require('postcss-nested')(),
                require('postcss-custom-media')(),
                require('postcss-mixins')(),
                require('postcss-custom-properties')({
                  preserve: false,
                  importFrom: 'src/client/css/_helpers/_variables.css'
                }),
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
}

export default config;
