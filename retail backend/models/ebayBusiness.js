const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const EbayBusiness = sequelize.define('ebayBusiness', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  prod_name:Sequelize.STRING,
  total_units_sold:Sequelize.INTEGER,
  total_profit:Sequelize.INTEGER,
  dated:
      {
        type: Sequelize.DATEONLY,
        allowNull:false,
      },
business_regional:{
    type: Sequelize.TEXT,
    defaultValue:null,
    get: function() {
      return JSON.parse(this.getDataValue("business_regional"));
    },
    set: function(value) {
      return this.setDataValue("business_regional", JSON.stringify(value));
  }
},
business_gender:{
    type: Sequelize.TEXT,
    defaultValue:null,
    get: function() {
      return JSON.parse(this.getDataValue("business_gender"));
    },
    set: function(value) {
      return this.setDataValue("business_gender", JSON.stringify(value));
  }
},
business_age:{
    type: Sequelize.TEXT,
    defaultValue:null,
    get: function() {
      return JSON.parse(this.getDataValue("business_age"));
    },
    set: function(value) {
      return this.setDataValue("business_age", JSON.stringify(value));
  }
}
});

module.exports = EbayBusiness;