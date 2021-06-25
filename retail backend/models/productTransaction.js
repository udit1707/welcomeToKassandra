const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const ProductTransaction = sequelize.define('productTransaction', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  feedback:Sequelize.STRING,
  transaction_no:Sequelize.INTEGER,
  prodId:Sequelize.INTEGER
  
});

module.exports = ProductTransaction;