const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Employer = sequelize.define('employer', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  org_name:Sequelize.STRING,
  type:Sequelize.STRING,
  temp_id:Sequelize.INTEGER
});

module.exports = Employer;