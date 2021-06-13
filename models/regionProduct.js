const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const RegionProduct = sequelize.define('regionProduct', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  stock_count:{type:Sequelize.INTEGER,defaultValue:0},
  sold_count:{type:Sequelize.INTEGER,defaultValue:0},
  returned_count:{type:Sequelize.INTEGER,defaultValue:0},
  expired_count:{type:Sequelize.INTEGER,defaultValue:0},
  out_of_stock:{type:Sequelize.BOOLEAN,defaultValue:false},
  in_sale:{type:Sequelize.BOOLEAN,defaultValue:false}
});

module.exports = RegionProduct;