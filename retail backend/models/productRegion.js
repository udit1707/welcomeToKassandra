const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const ProductRegion = sequelize.define('productRegion', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  total_units_sold:Sequelize.INTEGER,
  total_units_returned:Sequelize.INTEGER,
  total_units_expired:Sequelize.INTEGER,
  map_id:Sequelize.STRING    
});

module.exports = ProductRegion;