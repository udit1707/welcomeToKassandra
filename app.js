const path=require('path');
const fs=require('fs');
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
require('dotenv').config();
const sequelize=require('./util/database');
const employeeRoutes=require('./routes/employee');
const manufacturerRoutes=require('./routes/manufacturer');
const retailerRoutes=require('./routes/retailer');
const userRoutes=require('./routes/user');

const AmazonBusiness=require('./models/amazonBusiness');
const EbayBusiness=require('./models/ebayBusiness');
const FlipkartBusiness=require('./models/flipkartBusiness');
const Product=require('./models/product');
const Brand=require('./models/brand');
const Category=require('./models/category');
const Region=require('./models/region');
const Retailer=require('./models/retailer');
const Manufacturer=require('./models/manufacturer');
// const Employer=require('./models/employer');
const Employee=require('./models/employee');
const EmployeeRetailer=require('./models/employeeRetailer');
const EmployeeManufacturer=require('./models/employeeManufacturer');
const Ebay=require('./models/ebay');
const Amazon=require('./models/amazon');
const Flipkart = require('./models/flipkart');
const User = require('./models/user');
// const RetailerRegion=require('./models/retailerRegion');
const RegionProduct=require('./models/regionProduct');

app.use(bodyParser.json());
// app.use(require('connect').bodyParser());
// // app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


// middleware to handle CORS exception
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });


// Routes

app.use('/manufacturer',manufacturerRoutes);
app.use('/employee',employeeRoutes);
app.use('/retailer',retailerRoutes);
app.use('/',userRoutes);

// Table Assocations


User.hasOne(Retailer,{onDelete:"cascade"});
User.hasOne(Manufacturer,{onDelete:"cascade"});
User.hasOne(Employee,{onDelete:"cascade"});

Manufacturer.belongsToMany(Employee,{through:EmployeeManufacturer});
Retailer.belongsToMany(Employee,{through:EmployeeRetailer});


Retailer.hasMany(Product,{onDelete:"cascade"});
Product.belongsTo(Retailer);

Category.hasMany(Product);
Product.belongsTo(Category);

Brand.hasMany(Product);
Product.belongsTo(Brand);

Product.belongsToMany(Region,{through:RegionProduct});
Region.belongsToMany(Product,{through:RegionProduct});

Retailer.hasMany(RegionProduct,{onDelete:"cascade"});



Retailer.hasMany(Amazon,{onDelete:"cascade"});
Retailer.hasMany(Flipkart,{onDelete:"cascade"});
Retailer.hasMany(Ebay,{onDelete:"cascade"});

Product.hasOne(Amazon,{onDelete:"cascade"});
Product.hasOne(Flipkart,{onDelete:"cascade"});
Product.hasOne(Ebay,{onDelete:"cascade"});

Product.hasMany(AmazonBusiness);
Product.hasMany(EbayBusiness);
Product.hasMany(FlipkartBusiness);



// middleware to handle errors
app.use((error,req,res,next)=>{
    console.log(error);
    const status=error.statusCode||500;
    const message=error.message;
    const data=error.data;
    res.status(status).json({err_message:message,data:data,status_code:status});
  });

sequelize.
//sync({force:true}). //reset the schema
sync().
  then(result=>{
      console.log(result);
      app.listen(process.env.PORT||2900,async()=>{
      const isRegion=await Region.count();
      if(isRegion==0)
      {
        await Region.create({region:"UP East"});
      }
      const isCategory=await Category.count();
      if(isCategory==0)
      {
        await Category.create({category_name:"Mobile"});
      }
      const isBrand=await Brand.count();
      if(isBrand==0)
      {
        await Brand.create({brand_name:"Samsung"});
      }
      
      console.log("App Server started!");
  });
});