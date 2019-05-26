'use strict';

const moment = require('moment');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('books', [
      {
        title: '父が娘に語る 美しく、深く、壮大で、とんでもなくわかりやすい経済の話。',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IJAgUjVLL._SX344_BO1,204,203,200_.jpg',
        itemUrl: 'https://www.amazon.co.jp/dp/B07NMP97HW/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1',
        description: '「とんでもなくわかりやすいだけでなく、とんでもなくおもしろい」\n「知的好奇心を刺激するドラマチックな展開に、ぐいぐい引き込まれる」\n「一冊で仮想通貨や公的債務の是非、環境問題まで網羅しているのも驚き」と大絶賛！',
        completedAt: moment('2017-01').format('YYYY-MM-DD HH:mm'),
        createdAt: moment().format('YYYY-MM-DD HH:mm'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm')
      },
      {
        title: '大人のための「超」計算 正しく 速く カッコよく解く! ',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51S6SYGGieL._SX343_BO1,204,203,200_.jpg',
        itemUrl: 'https://www.amazon.co.jp/dp/B00TEZ9X5A/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1',
        description: '2けた、3けたもコワくない! ちょっとした工夫でこんなにカンタンに!\nたとえば、おつりやワリカン計算が電卓なしでスパスパできるようになる、\n中学受験のカリスマ算数講師が実例をもとに説く、計算スキル底上げブック。',
        completedAt: moment('2016-01').format('YYYY-MM-DD HH:mm'),
        createdAt: moment().format('YYYY-MM-DD HH:mm'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm')
      },
      {
        title: '蜜蜂と遠雷',
        imageUrl: '',
        itemUrl: '',
        description: 'ピアノコンクールを舞台に、人間の才能と運命、そして音楽を描き切った青春群像小説。',
        completedAt: moment('2015-01').format('YYYY-MM-DD HH:mm'),
        createdAt: moment().format('YYYY-MM-DD HH:mm'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm')
      },
      {
        title: '明日の記憶 (光文社文庫)',
        imageUrl: '//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00UGQFVDY&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=tkc2121-22&language=ja_JP',
        itemUrl: 'https://www.amazon.co.jp/gp/product/B00UGQFVDY/ref=as_li_ss_il?ie=UTF8&psc=1&linkCode=li3&tag=tkc2121-22&linkId=17731bd9de2fbc205c761ebc00027943&language=ja_JP',
        description: 'んー。まだ読んでないからわからないね。\n\nでも面白そう',
        completedAt: moment('2018-01').format('YYYY-MM-DD HH:mm'),
        createdAt: moment().format('YYYY-MM-DD HH:mm'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm')
      },
      {
        title: 'Node.js デザインパターン',
        imageUrl: '//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4873118735&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=tkc2121-22&language=ja_JP',
        itemUrl: '',
        description: 'れはいい！！',
        completedAt: moment('2018-01').format('YYYY-MM-DD HH:mm'),
        createdAt: moment().format('YYYY-MM-DD HH:mm'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm')
      },
      {
        title: 'tkcco21',
        imageUrl: 'http://tkcco21.github.io/introduce/myprofile/assets/images/gallery/photo1.jpg',
        itemUrl: 'http://tkcco21.github.io/introduce/myprofile/gallery/index.html',
        description: 'test',
        completedAt: moment('2018-03').format('YYYY-MM-DD HH:mm'),
        createdAt: moment().format('YYYY-MM-DD HH:mm'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm')
      },
      {
        title: 'tkcco21-2',
        imageUrl: 'http://tkcco21.github.io/introduce/myprofile/assets/images/gallery/photo2.jpg',
        itemUrl: 'http://tkcco21.github.io/introduce/myprofile/gallery/index.html',
        description: 'test',
        completedAt: moment('2018-03').format('YYYY-MM-DD HH:mm'),
        createdAt: moment().format('YYYY-MM-DD HH:mm'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm')
      },
      {
        title: 'tkcco21-3',
        imageUrl: 'http://tkcco21.github.io/introduce/myprofile/assets/images/gallery/photo3.jpg',
        itemUrl: 'http://tkcco21.github.io/introduce/myprofile/gallery/index.html',
        description: 'test',
        completedAt: moment('2018-03').format('YYYY-MM-DD HH:mm'),
        createdAt: moment().format('YYYY-MM-DD HH:mm'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm')
      },
      {
        title: 'tkcco21-4',
        imageUrl: 'http://tkcco21.github.io/introduce/myprofile/assets/images/gallery/photo4.jpg',
        itemUrl: 'http://tkcco21.github.io/introduce/myprofile/gallery/index.html',
        description: 'test',
        completedAt: moment('2018-03').format('YYYY-MM-DD HH:mm'),
        createdAt: moment().format('YYYY-MM-DD HH:mm'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm')
      },
      {
        title: 'tkcco21-5',
        imageUrl: 'http://tkcco21.github.io/introduce/myprofile/assets/images/gallery/photo5.jpg',
        itemUrl: 'http://tkcco21.github.io/introduce/myprofile/gallery/index.html',
        description: 'test',
        completedAt: moment('2018-03').format('YYYY-MM-DD HH:mm'),
        createdAt: moment().format('YYYY-MM-DD HH:mm'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm')
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
