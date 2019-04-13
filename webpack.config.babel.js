const { VueLoaderPlugin } = require("vue-loader");
import webpack from 'webpack';
import path from 'path';

const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv === 'development';

const src = path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, './dist');

const config = {
  mode: nodeEnv,
  devtool: isDev ? 'source-map' : 'eval',
  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: {
      'AdminComponents': path.resolve(__dirname, './src/client/js/admin/components'),
      'AdminContainers': path.resolve(__dirname, './src/client/js/admin/containers'),
      'PublicComponents': path.resolve(__dirname, './src/client/js/public/components'),
      'PublicContainers': path.resolve(__dirname, './src/client/js/public/containers'),
    }
  },
  plugins: [new VueLoaderPlugin()],
  entry: {
    public: ['./src/client/js/public/index.js'],
    admin: ['./src/client/js/admin/index.js']
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
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                  grid: true,
                  browsers: [
                    'IE >= 9',
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
              sourceMap: true
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
