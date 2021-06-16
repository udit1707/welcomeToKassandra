const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Flipkart = sequelize.define('flipkart', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  prod_name:Sequelize.STRING,
  total_stock:Sequelize.INTEGER,
  regional_stock:{
    type: Sequelize.TEXT,
    defaultValue:null,
    get: function() {
      return JSON.parse(this.getDataValue("regional_stock"));
    },
    set: function(value) {
      return this.setDataValue("regional_stock", JSON.stringify(value));
  }
}
});
module.exports = Flipkart;