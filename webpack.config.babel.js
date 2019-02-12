const { VueLoaderPlugin } = require("vue-loader");
import path from 'path';

const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv === 'development';
console.log('nodeEnv ==> ', nodeEnv);
console.log('isDev ==> ', isDev);

const src = path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, './public');

const config = {
  mode: nodeEnv,
  devtool: isDev ? 'source-map' : 'eval',
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      Components: path.resolve(__dirname, 'src/components'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [new VueLoaderPlugin()],
  // webpack-dev-server
  devServer: {
    open: true,
    inline: true,
    port: 8080,
    watchContentBase: true,
    contentBase: path.join(__dirname, 'public'),
  },
  entry: {
    index: [
      '@babel/polyfill',
      './src/index.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
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
              sourceMap: true,
            }
          }
        ]
      }
    ]
  }
}
console.log(path.resolve(__dirname, 'src/components'));

export default config;