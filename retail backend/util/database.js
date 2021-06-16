const Sequelize=require('sequelize');
// const sequelize=new Sequelize('','','',{dialect:'mysql',host:'localhost',storage: "./session.sqlite"});
// module.exports=sequelize;

const sequelize=new Sequelize(process.env.MYSQL_SCHEMA,process.env.MYSQL_USERNAME,process.env.MYSQL_PASS,{dialect:'mysql',host:process.env.MYSQL_HOST,storage: "./session.sqlite"});
 module.exports=sequelize;