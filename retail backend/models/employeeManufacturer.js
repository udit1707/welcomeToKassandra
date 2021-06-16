const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const EmployeeManufacturer = sequelize.define('employeeManufacturer', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
});

module.exports = EmployeeManufacturer;