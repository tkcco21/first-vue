// jest.config.js
module.exports = {
  verbose: true,
  // *.vue ファイルを処理するために拡張子 vue を指定
  moduleFileExtensions: [ 'js', 'json', 'vue' ],
  transform: {
    // vue-jest で *.vue ファイルを処理する
    '.*\\.(vue)$': 'vue-jest',
    // babel-jest で js を処理する
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  transformIgnorePatterns: [ 'node_modules' ],
  // webpackのエイリアスを設定している場合は必要
  // alias: { '@': path.join(__dirname, 'src') } 的なやつ
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  // Vue.jsでスナップショットを取る場合に必要
  // snapshotSerializers: [ 'jest-serializer-vue' ]
};