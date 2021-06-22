const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  prod_name:Sequelize.STRING,
  image:Sequelize.STRING,
  serial_no:Sequelize.STRING,
  units_avail:Sequelize.INTEGER,
  offline_retailer_units:Sequelize.INTEGER,
  amazon_units:Sequelize.INTEGER,
  ebay_units:Sequelize.INTEGER,
  flipkart_units:Sequelize.INTEGER,
  units_sold_total:Sequelize.INTEGER,
  desc:{
    type: Sequelize.TEXT,
    defaultValue:null,
    get: function() {
      return JSON.parse(this.getDataValue("desc"));
    },
    set: function(value) {
      return this.setDataValue("desc", JSON.stringify(value));
  }
},
});

module.exports = Product;