const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Amazon = sequelize.define('amazon', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  prod_name:Sequelize.STRING,
  allocated:{
    type: Sequelize.TEXT,
    defaultValue:null,
    get: function() {
      return JSON.parse(this.getDataValue("allocated"));
    },
    set: function(value) {
      return this.setDataValue("allocated", JSON.stringify(value));
  }
},
sell_out:{
    type: Sequelize.TEXT,
    defaultValue:null,
    get: function() {
      return JSON.parse(this.getDataValue("sell_out"));
    },
    set: function(value) {
      return this.setDataValue("sell_out", JSON.stringify(value));
  }
},
business:{
    type: Sequelize.TEXT,
    defaultValue:null,
    get: function() {
      return JSON.parse(this.getDataValue("business"));
    },
    set: function(value) {
      return this.setDataValue("business", JSON.stringify(value));
  }
}
});

module.exports = Amazon;