const { VueLoaderPlugin } = require("vue-loader");
import path from 'path';

const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv === 'development';

console.log('*******************************************************');
console.log('***');
console.log('*** nodeEnv ==> ', nodeEnv);
console.log('*** isDev ==> ', isDev);
console.log('*** ', __dirname);
console.log('***');
console.log('*******************************************************');

const src = path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, './dist');

const config = {
  mode: nodeEnv,
  devtool: isDev ? 'source-map' : 'eval',
  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: {
      'AdminComponents': path.resolve(__dirname, 'src/admin/components'),
      'AdminContainers': path.resolve(__dirname, 'src/admin/containers'),
      'PublicComponents': path.resolve(__dirname, 'src/public/components'),
      'PublicContainers': path.resolve(__dirname, 'src/public/containers'),
    }
  },
  plugins: [new VueLoaderPlugin()],
  entry: {
    public: './src/public/index.js',
    admin: './src/admin/index.js',
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist/'),
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
        loader: 'vue-loader'
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

export default config;
