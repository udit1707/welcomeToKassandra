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
const ProductTransaction=require('./models/productTransaction');
const Category=require('./models/category');
const Region=require('./models/region');
const ProductRegion=require('./models/productRegion');
const Retailer=require('./models/retailer');
const Manufacturer=require('./models/manufacturer');
const Employee=require('./models/employee');
const EmployeeRetailer=require('./models/employeeRetailer');
const EmployeeManufacturer=require('./models/employeeManufacturer');
const Ebay=require('./models/ebay');
const Amazon=require('./models/amazon');
const Flipkart = require('./models/flipkart');
const User = require('./models/user');
const RetailerProduct = require('./models/retailerProduct');
const RegionRetailer=require('./models/regionRetailer');
const Employer = require('./models/employer');
const Meeting=require('./models/meeting');


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
Employer.hasMany(Employee);

Manufacturer.hasMany(Product);

Product.hasMany(RetailerProduct);
Retailer.hasMany(RetailerProduct,{onDelete:"cascade"});

Employee.hasMany(Meeting);
Employer.hasMany(Meeting);

RetailerProduct.belongsToMany(Region,{through:RegionRetailer});
Region.belongsToMany(RetailerProduct,{through:RegionRetailer});

Category.hasMany(Product);
Product.belongsTo(Category);

Retailer.hasMany(Amazon,{onDelete:"cascade"});
Retailer.hasMany(Flipkart,{onDelete:"cascade"});
Retailer.hasMany(Ebay,{onDelete:"cascade"});

Product.belongsToMany(Region,{through:ProductRegion});
Region.belongsToMany(Product,{through:ProductRegion})


Product.hasOne(Amazon,{onDelete:"cascade"});
Product.hasOne(Flipkart,{onDelete:"cascade"});
Product.hasOne(Ebay,{onDelete:"cascade"});

Product.hasMany(AmazonBusiness);
Product.hasMany(EbayBusiness);
Product.hasMany(FlipkartBusiness);
Employee.hasMany(ProductTransaction,{onDelete:"cascade"});



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
        await Region.create({region:"Andaman & Nicobar Island",map_id:"AN"});
        await Region.create({region:"Andhra Pradesh",map_id:"AP"});
        await Region.create({region:"Arunanchal Pradesh",map_id:"AR"});
        await Region.create({region:"Assam",map_id:"AS"});
        await Region.create({region:"Bihar",map_id:"BR"});
        await Region.create({region:"Chhattisgarh",map_id:"CT"});
        await Region.create({region:"Puducherry",map_id:"PY"});
        await Region.create({region:"Punjab",map_id:"PB"});
        await Region.create({region:"Rajasthan",map_id:"RJ"});
        await Region.create({region:"Sikkim",map_id:"SK"});
        await Region.create({region:"Tamil Nadu",map_id:"TN"});
        await Region.create({region:"Chandigarh",map_id:"CH"});
        await Region.create({region:"Telangana",map_id:"TS"});
        await Region.create({region:"Tripura",map_id:"TR"});
        await Region.create({region:"Uttar Pradesh",map_id:"UP"});
        await Region.create({region:"Uttarakhand",map_id:"UK"});
        await Region.create({region:"West Bengal",map_id:"WB"});
        await Region.create({region:"Odisha",map_id:"OD"});
        await Region.create({region:"Dadara & Nagar Havelli",map_id:"DN"});
        await Region.create({region:"Daman & Diu",map_id:"DD"});
        await Region.create({region:"Goa",map_id:"GA"});
        await Region.create({region:"Gujarat",map_id:"GJ"});
        await Region.create({region:"Haryana",map_id:"HR"});
        await Region.create({region:"Himachal Pradesh",map_id:"HP"});
        await Region.create({region:"Jammu & Kashmir",map_id:"JK"});
        await Region.create({region:"Jharkhand",map_id:"JH"});
        await Region.create({region:"Karnataka",map_id:"KA"});
        await Region.create({region:"Kerala",map_id:"KL"});
        await Region.create({region:"Lakshadweep",map_id:"LD"});
        await Region.create({region:"Madhya Pradesh",map_id:"MP"});
        await Region.create({region:"Maharashtra",map_id:"MH"});
        await Region.create({region:"Manipur",map_id:"MN"});
        await Region.create({region:"Meghalaya",map_id:"ML"});
        await Region.create({region:"Mizoram",map_id:"MZ"});
        await Region.create({region:"Nagaland",map_id:"NL"});
        await Region.create({region:"Delhi",map_id:"DL"});
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