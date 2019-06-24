'use strict';

export default (sequelize, DataTypes) => {
  const Books = sequelize.define('books', {
    title: DataTypes.STRING,
    itemUrl: DataTypes.TEXT,
    description: DataTypes.STRING,
    completedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }, {});
  Books.associate = function(models) {
    // associations can be defined here
  };
  return Books;
};