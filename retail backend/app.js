const path=require('path');
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
require('dotenv').config();
const sequelize=require('./util/database');
const employeeRoutes=require('./routes/employee');
const manufacturerRoutes=require('./routes/manufacturer');
const retailerRoutes=require('./routes/retailer');
const userRoutes=require('./routes/user');
const miscRoutes=require('./routes/misc');
const AmazonBusiness=require('./models/amazonBusiness');
const EbayBusiness=require('./models/ebayBusiness');
const FlipkartBusiness=require('./models/flipkartBusiness');
const Product=require('./models/product');
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
const RetailerProduct = require('./models/retailerProduct');
const RegionRetailer=require('./models/regionRetailer');


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
app.use(miscRoutes);
app.use(userRoutes);

// Table Assocations


User.hasOne(Retailer,{onDelete:"cascade"});
User.hasOne(Manufacturer,{onDelete:"cascade"});
User.hasOne(Employee,{onDelete:"cascade"});

Manufacturer.belongsToMany(Employee,{through:EmployeeManufacturer});
Retailer.belongsToMany(Employee,{through:EmployeeRetailer});

Manufacturer.hasMany(Product);

Product.hasMany(RetailerProduct);
Retailer.hasMany(RetailerProduct,{onDelete:"cascade"});

RetailerProduct.belongsToMany(Region,{through:RegionRetailer});
Region.belongsToMany(RetailerProduct,{through:RegionRetailer});

Category.hasMany(Product);
Product.belongsTo(Category);


// Product.belongsToMany(Region,{through:RegionProduct});
// Region.belongsToMany(Product,{through:RegionProduct});

// Retailer.hasMany(RegionProduct,{onDelete:"cascade"});



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
        await Region.create({region:"Uttar Pradesh"});
        await Region.create({region:"Delhi"});
        await Region.create({region:"Punjab"});
        await Region.create({region:"Assam"});
        await Region.create({region:"Bihar"});
      }
      const isCategory=await Category.count();
      if(isCategory==0)
      {
        await Category.create({category_name:"Mobile"});
        await Category.create({category_name:"Laptop"});
        await Category.create({category_name:"Desktop"});
        await Category.create({category_name:"Audio"});
        await Category.create({category_name:"Storage"});
      }
            
      console.log("App Server started!");
  });
});