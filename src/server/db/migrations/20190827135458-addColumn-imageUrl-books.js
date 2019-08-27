module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('books', 'imageUrl', {
      type: Sequelize.TEXT,
      after: 'itemUrl',
    }),

  down: queryInterface => queryInterface.removeColumn('books', 'imageUrl'),
};