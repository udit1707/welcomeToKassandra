const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const RegionRetailer = sequelize.define('regionRetailer', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  regional_price:Sequelize.INTEGER,
  region:Sequelize.STRING,
  stock_count:{type:Sequelize.INTEGER,defaultValue:0},
  sold_count:{type:Sequelize.INTEGER,defaultValue:0},
  returned_count:{type:Sequelize.INTEGER,defaultValue:0},
  expired_count:{type:Sequelize.INTEGER,defaultValue:0},
  out_of_stock:{type:Sequelize.BOOLEAN,defaultValue:false},
  in_sale:{type:Sequelize.BOOLEAN,defaultValue:false}
});

module.exports = RegionRetailer;