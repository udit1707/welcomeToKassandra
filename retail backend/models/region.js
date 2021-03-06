const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Region = sequelize.define('region', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  region:Sequelize.STRING,
  map_id:Sequelize.STRING
});

module.exports = Region;