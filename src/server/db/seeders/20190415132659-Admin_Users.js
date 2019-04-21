'use strict';

const moment = require('moment');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('admin_users', [
      {
        username: 'admin01',
        password: 'test123Admin',
        created_at: moment().format('YYYY-MM-DD HH:mm'),
        updated_at: moment().format('YYYY-MM-DD HH:mm')
      },
      {
        username: 'admin02',
        password: '123TKC123test',
        created_at: moment().format('YYYY-MM-DD HH:mm'),
        updated_at: moment().format('YYYY-MM-DD HH:mm')
      }
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
