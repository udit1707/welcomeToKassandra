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
  city:Sequelize.STRING,
  state:Sequelize.STRING,
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
employee_happ_index:Sequelize.FLOAT,
total_thumbs:Sequelize.INTEGER,
sum_thumb:Sequelize.INTEGER
});

module.exports = Manufacturer;