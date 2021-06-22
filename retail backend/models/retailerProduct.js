const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const RetailerProduct = sequelize.define('retailerProduct', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  prod_name:Sequelize.STRING,
  units_avail:Sequelize.INTEGER,
  units_sold:Sequelize.INTEGER,
  retailer:Sequelize.STRING  
});
module.exports = RetailerProduct;