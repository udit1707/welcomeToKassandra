const Sequelize=require('sequelize');

const sequelize=new Sequelize(process.env.AZURE_MYSQL_SCHEMA,process.env.AZURE_MYSQL_USERNAME,process.env.AZURE_MYSQL_PASS,{dialect:'mysql',dialectOptions: {
                "ssl": {"require": true}},host:process.env.AZURE_MYSQL_HOST,storage: "./session.sqlite"});
module.exports=sequelize;