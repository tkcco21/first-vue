'use strict';
module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('Books', {
    item_url: DataTypes.STRING,
    description: DataTypes.STRING,
    completed_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    underscored: true,
  });
  Books.associate = function(models) {
    // associations can be defined here
  };
  return Books;
};