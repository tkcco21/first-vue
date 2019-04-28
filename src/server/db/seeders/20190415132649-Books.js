'use strict';

const moment = require('moment');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('books', [
      {
        title: '父が娘に語る 美しく、深く、壮大で、とんでもなくわかりやすい経済の話。',
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/51IJAgUjVLL._SX344_BO1,204,203,200_.jpg',
        item_url: 'https://www.amazon.co.jp/dp/B07NMP97HW/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1',
        description: '「とんでもなくわかりやすいだけでなく、とんでもなくおもしろい」\n「知的好奇心を刺激するドラマチックな展開に、ぐいぐい引き込まれる」\n「一冊で仮想通貨や公的債務の是非、環境問題まで網羅しているのも驚き」と大絶賛！',
        completed_at: moment('2018-01').format('YYYY-MM-DD HH:mm'),
        created_at: moment().format('YYYY-MM-DD HH:mm'),
        updated_at: moment().format('YYYY-MM-DD HH:mm')
      },
      {
        title: '大人のための「超」計算 正しく 速く カッコよく解く! ',
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/51S6SYGGieL._SX343_BO1,204,203,200_.jpg',
        item_url: 'https://www.amazon.co.jp/dp/B00TEZ9X5A/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1',
        description: '2けた、3けたもコワくない! ちょっとした工夫でこんなにカンタンに!\nたとえば、おつりやワリカン計算が電卓なしでスパスパできるようになる、\n中学受験のカリスマ算数講師が実例をもとに説く、計算スキル底上げブック。',
        completed_at: moment('2018-01').format('YYYY-MM-DD HH:mm'),
        created_at: moment().format('YYYY-MM-DD HH:mm'),
        updated_at: moment().format('YYYY-MM-DD HH:mm')
      },
      {
        title: '蜜蜂と遠雷',
        image_url: '',
        item_url: '',
        description: 'ピアノコンクールを舞台に、人間の才能と運命、そして音楽を描き切った青春群像小説。',
        completed_at: moment('2018-01').format('YYYY-MM-DD HH:mm'),
        created_at: moment().format('YYYY-MM-DD HH:mm'),
        updated_at: moment().format('YYYY-MM-DD HH:mm')
      },
      {
        title: 'シーダー０２',
        image_url: '',
        item_url: 'http://google.com',
        description: 'google',
        completed_at: moment('2018-02').format('YYYY-MM-DD HH:mm'),
        created_at: moment().format('YYYY-MM-DD HH:mm'),
        updated_at: moment().format('YYYY-MM-DD HH:mm')
      },
      {
        title: '大人のための「超」計算 正しく 速く カッコよく解く! ',
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/51S6SYGGieL._SX343_BO1,204,203,200_.jpg',
        item_url: 'https://www.amazon.co.jp/dp/B00TEZ9X5A/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1',
        description: '2けた、3けたもコワくない! ちょっとした工夫でこんなにカンタンに!\nたとえば、おつりやワリカン計算が電卓なしでスパスパできるようになる、\n中学受験のカリスマ算数講師が実例をもとに説く、計算スキル底上げブック。',
        completed_at: moment('2018-02').format('YYYY-MM-DD HH:mm'),
        created_at: moment().format('YYYY-MM-DD HH:mm'),
        updated_at: moment().format('YYYY-MM-DD HH:mm')
      },
      {
        title: '蜜蜂と遠雷',
        image_url: '',
        item_url: '',
        description: 'ピアノコンクールを舞台に、人間の才能と運命、そして音楽を描き切った青春群像小説。',
        completed_at: moment('2018-02').format('YYYY-MM-DD HH:mm'),
        created_at: moment().format('YYYY-MM-DD HH:mm'),
        updated_at: moment().format('YYYY-MM-DD HH:mm')
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
