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
  serial_no:Sequelize.STRING,
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