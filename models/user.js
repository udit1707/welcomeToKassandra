const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  k_PID:Sequelize.STRING,
  role:Sequelize.STRING,
  password:Sequelize.STRING,
  refreshToken:Sequelize.STRING
});

module.exports = User;