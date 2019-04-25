'use strict';

export default (sequelize, DataTypes) => {
  const Books = sequelize.define('books', {
    title: DataTypes.STRING,
    item_url: DataTypes.STRING,
    image_url: DataTypes.STRING,
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