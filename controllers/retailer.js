const Retailer=require('../models/retailer');
const bcrypt = require('bcryptjs');
const AmazonBusiness=require('../models/amazonBusiness');
const EbayBusiness=require('../models/ebayBusiness');
const FlipkartBusiness=require('../models/flipkartBusiness');
const Product=require('../models/product');
const Category=require('../models/category');
const Brand=require('../models/brand');
const Region=require('../models/region');
const User = require('../models/user');
const Employer=require('../models/employer');
const RegionProduct=require('../models/regionProduct');
const { Op } = require('sequelize');


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




  /***************************** DASHBOARD STATS*******************************/



//Fetch Top Products
  exports.fetchTopProducts=async(req,res,next)=>{
    try
    {
      const date=req.query.date;
      const platform=req.query.platform;
      let platformProducts,stats={},orders=0,profit=0,feedback=0;
      if(platform=='Amazon')
      {
        const foundUser=await User.findByPk(req.userId);
        const foundRetailer=await foundUser.getRetailer({attributes:['id']});
        platformProducts=await AmazonBusiness.findAll({where:{dated:date,retailer_id:foundRetailer.id},attributes:['id','prod_name','total_units_sold','total_profit','feedback','business_gender','business_age'],order:[['total_units_sold','DESC']]});
        res.status(200).json({message:"Fetch Success",products:amazonProducts});
      }
      else if(platform=='Flipkart')
      {
        const foundUser=await User.findByPk(req.userId);
        const foundRetailer=await foundUser.getRetailer({attributes:['id']});
        platformProducts=await FlipkartBusiness.findAll({where:{dated:date,retailer_id:foundRetailer.id},attributes:['id','prod_name','total_units_sold','total_profit','feedback','business_gender','business_age'],order:[['total_units_sold','DESC']]});
        res.status(200).json({message:"Fetch Success",products:flipkartProducts});
      }
      else
      {
        const foundUser=await User.findByPk(req.userId);
        const foundRetailer=await foundUser.getRetailer({attributes:['id']});
        platformProducts=await EbayBusiness.findAll({where:{dated:date,retailer_id:foundRetailer.id},attributes:['id','prod_name','total_units_sold','total_profit','feedback','business_gender','business_age'],order:[['total_units_sold','DESC']]});
      }
      let cnt=0,male=0,female=0,kids=0,other=0;let topProducts=0;'business_gender','business_age';
      platformProducts.forEach(i=>{
        orders+=i.total_units_sold;
        profit+=i.total_profit;
        feedback+=i.feedback;
        if(cnt<10)
        {
          topProducts.push({'prodName':i.prod_name,'totalUnits':i.total_units_sold,'total_profit':i.total_profit});
          cnt++;
        }
      });
      stats={'orders':order,'profit':profit,'feedback':feedback};
      res.status(200).json({message:"Fetch Success",products:topProducts,stats:stats});
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


  //Fetch Charts
  exports.fetchCharts=async(req,res,next)=>{
    const platform=req.query.platform;
    try
    {
      const foundUser=await User.findByPk(req.userId);
      const foundRetailer=await foundUser.getRetailer({attributes:['id']});
      if(platform=='Amazon')
      {

      }


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
  


