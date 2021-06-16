const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Category = sequelize.define('category', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  category_name:Sequelize.STRING,
  description:{
    type: Sequelize.TEXT,
    defaultValue:null,
    get: function() {
      return JSON.parse(this.getDataValue("description"));
    },
    set: function(value) {
      return this.setDataValue("description", JSON.stringify(value));
  }
}
});

module.exports = Category;