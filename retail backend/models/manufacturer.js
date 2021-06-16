const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Manufacturer = sequelize.define('manufacturer', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  org_name:Sequelize.STRING,
  email:Sequelize.STRING,
  mobile:Sequelize.BIGINT,
  address:Sequelize.STRING,
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

module.exports = Manufacturer;