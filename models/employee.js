const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Employee = sequelize.define('employee', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  first_name:Sequelize.STRING,
  last_name:Sequelize.STRING,
  org_name:Sequelize.STRING,
  email:Sequelize.STRING,
  mobile:Sequelize.BIGINT,
 
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

module.exports = Employee;