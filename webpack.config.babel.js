const { VueLoaderPlugin } = require("vue-loader");
import path from 'path';

const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv === 'development';
console.log('nodeEnv ==> ', nodeEnv);
console.log('isDev ==> ', isDev);
console.log(path.resolve(__dirname, 'src/js/components'));

const src = path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, './public');

const config = {
  mode: nodeEnv,
  devtool: isDev ? 'source-map' : 'eval',
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      Components: `${src}/js/components`,
    }
  },
  plugins: [new VueLoaderPlugin()],
  // webpack-dev-server
  devServer: {
    open: true,
    inline: true,
    hot: true,
    port: 8080,
    watchContentBase: true,
    contentBase: dist
  },
  entry: {
    index: `${src}/js/index.js`
  },
  output: {
    filename: '[name].js',
    path: `${dist}/js/`,
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
}

export default config;