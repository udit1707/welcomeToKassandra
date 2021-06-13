const Retailer=require('../models/retailer');
const bcrypt = require('bcryptjs');
const Product=require('../models/product');
const Category=require('../models/category');
const Brand=require('../models/brand');
const Region=require('../models/region');
const User = require('../models/user');
const Employer=require('../models/employer');
const RegionProduct=require('../models/regionProduct');

exports.home=async(req,res,next)=>{
  res.status(200).json({message:"Welcome to Kassandra!",status:"Deployment Success"});
}


/****************************************Fetch Region*************************************/

exports.fetchRegions=async(req,res,next)=>{
  try
  {
    const foundRegions=await Region.findAll();
    res.status(200).json({message:"Fetch success",regions:foundRegions});

  }
  catch(err)
  {
    if (!err.statusCode) 
      {
        err.statusCode = 500;
      }
      next(err);

  }
}

/****************************************Fetch Category*************************************/

exports.fetchCategory=async(req,res,next)=>{
  try
  {
    const foundCategories=await Category.findAll();
    res.status(200).json({message:"Fetch success",categories:foundCategories});

  }
  catch(err)
  {
    if (!err.statusCode) 
      {
        err.statusCode = 500;
      }
      next(err);

  }
}

/****************************************Fetch Brands*************************************/

exports.fetchBrand=async(req,res,next)=>{
  try
  {
    const foundBrands=await Brand.findAll();
    res.status(200).json({message:"Fetch success",brands:foundBrands});

  }
  catch(err)
  {
    if (!err.statusCode) 
      {
        err.statusCode = 500;
      }
      next(err);

  }
}

/***************************************NEW RETAILER**************************************/
exports.postNewRetailer=async(req,res,next)=>{
  const kassandraPortalID=req.body.kassandraPortalID;
  const password=req.body.password;
  const orgName=req.body.orgName;
  const email=req.body.email;
  const mobile=req.body.mobile;
  const address=req.body.address;
  const ret_details=req.body.details;  

  //username, password, name,
    
    try{
      const existinguser=await User.findOne({where:{k_PID:kassandraPortalID},attributes:['id','k_PID']});
      if(existinguser)
      {
        const error = new Error(`"Kassandra Portal ID" exists. Select a unique ID`);
        error.statusCode = 404;
        throw error;
      }
      const hashedPwd=await bcrypt.hash(password,12);
      const newUser=await User.create({k_PID:kassandraPortalID,password:hashedPwd,role:'Retailer'});
      const retailer=await newUser.createRetailer({org_name:orgName,email:email,mobile:mobile,address:address,desc:ret_details});
      const employer=await Employer.create({org_name:orgName,type:"retailer",temp_id:retailer.id});
      res.status(200).json({message:"Retailer added!"});
    }
    catch(err)
    {
        if (!err.statusCode) 
      {
        err.statusCode = 500;
      }
      next(err);
    }
}

/************************************NEW PRODUCT********************************************/
exports.postNewProduct=async(req,res,next)=>{
    const prodName=req.body.prodName;
    const snNo=req.body.snNo;
    const category=req.body.category;
    const brand=req.body.brand 
    const region=req.body.region; //could be an array [assigning products to multiple regions]
    const desc=req.body.desc;
    try{
      const foundRetailer=await Retailer.findByPk(req.userId);
      if(!foundRetailer)
      {
        const error = new Error("Retailer does not exist");
         error.statusCode = 404;
         throw error;
      }
      const newProduct=await foundRetailer.createProduct({prod_name:prodName,serial_no:snNo,desc:desc});
      const foundCategory=await Category.findOne({where:{category_name:category}});
      const foundBrand=await Brand.findOne({where:{brand_name:brand}});
      const foundRegion=await Region.findOne({where:{region:region}});
      const regionProduct=await foundRegion.addProduct(newProduct,{through:{RegionProduct}});
      await foundCategory.addProduct(newProduct);
      await foundBrand.addProduct(newProduct);
      await foundRetailer.addRegionProduct(regionProduct);
      
      res.status(200).json({message:"Product Added!"});
    }
    catch(err)
    {
      if (!err.statusCode) 
      {
        err.statusCode = 500;
      }
      next(err);
    }
  }

/*****************Region Wise Product Analysis ************************************/


exports.fetchRegionStocks=async(req,res,next)=>{
  const region=req.query.region;
  try{
    const foundRetailer=await Retailer.findByPk(req.userId);
      if(!foundRetailer)
      {
        const error = new Error("Retailer does not exist");
         error.statusCode = 404;
         throw error;
      }
    const foundRegionProducts=await foundRetailer.getRegionProducts();
    console.log(foundRegionProducts);
    res.status(200).json({message:"Products found!",prods:foundRegionProducts});
  }
  catch(err)
  {
    if (!err.statusCode) 
      {
        err.statusCode = 500;
      }
      next(err);
    }
  }
  


