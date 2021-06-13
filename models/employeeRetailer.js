const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const EmployeeRetailer = sequelize.define('employeeRetailer', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
});

module.exports = EmployeeRetailer;