import { VueLoaderPlugin } from 'vue-loader';
import webpack from 'webpack';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';

const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv === 'development';

const src = path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, './dist');

const config = {
  mode: nodeEnv,
  devtool: isDev ? 'eval-source-map' : 'eval',
  // source-map
  resolve: {
    extensions: ['.vue', '.js', '.json', '.scss'],
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
  ],
  entry: {
    public: ['./src/client/js/public/index.js'],
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
        test: /\.(css|sass|scss)$/,
        use: [
          isDev ? 'vue-style-loader' : {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                  grid: true,
                  browsers: [
                    'IE >= 11',
                    'last 2 versions'
                  ]
                })
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: true,
              data: `@import './src/client/scss/_helpers/index.scss';`
            }
          }
        ]
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
