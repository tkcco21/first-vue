'use strict';

const moment = require('moment');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [
      {
        item_url: 'This is First URL of Item',
        description: 'This is First Description',
        completed_at: moment().format('YYYY-MM-DD HH:mm'),
        created_at: moment().format('YYYY-MM-DD HH:mm'),
        updated_at: moment().format('YYYY-MM-DD HH:mm')
      },
      {
        item_url: 'This is Second URL of Item',
        description: 'This is Second Description',
        completed_at: moment().format('YYYY-MM-DD HH:mm'),
        created_at: moment().format('YYYY-MM-DD HH:mm'),
        updated_at: moment().format('YYYY-MM-DD HH:mm')
      },
      {
        item_url: 'This is Third URL of Item',
        description: 'This is Third Description',
        completed_at: moment().format('YYYY-MM-DD HH:mm'),
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
