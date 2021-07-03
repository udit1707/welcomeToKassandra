const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Meeting = sequelize.define('meeting', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  subject:Sequelize.TEXT,
  dated:
      {
        type: Sequelize.DATEONLY,
        allowNull:false,
      }
});

module.exports = Meeting;