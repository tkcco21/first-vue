'use strict';
module.exports = (sequelize, DataTypes) => {
  const Admin_Users = sequelize.define('admin_users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    underscored: true,
  });
  Admin_Users.associate = function(models) {
    // associations can be defined here
  };
  return Admin_Users;
};