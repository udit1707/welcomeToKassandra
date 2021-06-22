const Retailer=require('../models/retailer');
const bcrypt = require('bcryptjs');
const AmazonBusiness=require('../models/amazonBusiness');
const EbayBusiness=require('../models/ebayBusiness');
const FlipkartBusiness=require('../models/flipkartBusiness');
const Product=require('../models/product');
const Manufacturer=require('../models/manufacturer');
const Category=require('../models/category');
const Brand=require('../models/brand');
const Region=require('../models/region');
const User = require('../models/user');
const Employer=require('../models/employer');
const RetailerProduct = require('../models/retailerProduct');
const RegionRetailer=require('../models/regionRetailer');
const { Op } = require('sequelize');


exports.home=async(req,res,next)=>{
  res.status(200).json({message:"Welcome to Kassandra!",status:"Deployment Success"});
}

/***************************************NEW RETAILER**************************************/
exports.postNewRetailer=async(req,res,next)=>{
  const kassandraPortalID=req.body.kassandraPortalID;
  const password=req.body.password;
  const orgName=req.body.orgName;
  const email=req.body.email;
  const mobile=req.body.mobile;
  const address=req.body.address;
  const city=req.body.city;
  const state=req.body.state;
  const ret_details=req.body.details;  

  //username, password, name,
    
    try
    {
      const existinguser=await User.findOne({where:{k_PID:kassandraPortalID},attributes:['id','k_PID']});
      if(existinguser)
      {
        const error = new Error(`"Kassandra Portal ID" exists. Select a unique ID`);
        error.statusCode = 404;
        throw error;
      }
      const hashedPwd=await bcrypt.hash(password,12);
      const newUser=await User.create({k_PID:kassandraPortalID,password:hashedPwd,role:'Retailer'});
      const retailer=await newUser.createRetailer({org_name:orgName,email:email,mobile:mobile,address:address,desc:ret_details,city:city,state:state});
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

/************************************Pick NEW PRODUCT********************************************/
exports.postNewProduct=async(req,res,next)=>{
  const prodId=req.body.prodId;
  const prodUnits=+req.body.units;
  try
  {
    const foundUser=await User.findByPk(req.userId);    
    const foundRetailer=await foundUser.getRetailer();
    if(!foundRetailer)
    {
      const error = new Error("Retailer does not exist");
       error.statusCode = 404;
       throw error;
    }
    const foundProduct=await Product.findByPk(prodId,{attributes:['id','prod_name','offline_retailer_units']});
    if(prodUnits>foundProduct.offline_retailer_units)
    {
      const error = new Error("Insufficient Stock.Select a new stock count");
       error.statusCode = 500;
       throw error;
    }
    foundProduct.offline_retailer_units-=prodUnits;
    await foundProduct.save();

    const retailerProduct=await RetailerProduct.create({prod_name:foundProduct.prod_name,units_avail:prodUnits,units_sold:0,retailer:foundRetailer.org_name});
    await foundRetailer.addRetailerProduct(retailerProduct);
    await foundProduct.addRetailerProduct(retailerProduct); 
    res.status(200).json({message:"Product Added for the retailer!"});
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

/*************************Fetch Product by Category******************************************/
exports.fetchProdByCategory=async(req,res,next)=>{
  const catId=req.params.catId;let arr=[];
  try
  {
    const foundUser=await User.findByPk(req.userId);
    const foundRetailer=await foundUser.getRetailer();let arr=[];
    if(!foundRetailer)
      {
        const error = new Error("Retailer does not exist");
         error.statusCode = 404;
         throw error;
      }   
      const cat=await Category.findByPk(catId,{attributes:['id','category_name']});
      const products=await cat.getProducts({attributes:['id','prod_name','serial_no','offline_retailer_units','units_sold_total','manufacturerId']});
      console.log(products);
      for(let i=0;i<products.length;i++)
      {
        let el=products[i];
        const foundProd=await RetailerProduct.findOne({where:{retailerId:foundRetailer.id,productId:el.id}});
        if(!foundProd)
        {
          const manf=await Manufacturer.findByPk(el.manufacturerId,{attributes:['id','org_name','email']});
          let obj={'prodData':el,'manufData':manf};
        arr.push(obj);
      }
      }
      res.status(200).json({message:"Products Fetched",prodArr:arr});
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

/*****************************Fetch Products by Popularity ***********************************/
exports.fetchProdByPop=async(req,res,next)=>{
  try{
    const foundUser=await User.findByPk(req.userId);
    const foundRetailer=await foundUser.getRetailer();let arr=[];
    if(!foundRetailer)
      {
        const error = new Error("Retailer does not exist");
         error.statusCode = 404;
         throw error;
      }   
    const products=await Product.findAll({order:[['units_sold_total','DESC']],attributes:['id','prod_name','serial_no','offline_retailer_units','units_sold_total','manufacturerId','categoryId']});
    for(let i=0;i<products.length;i++)
    {
      let el=products[i];
      const foundProd=await RetailerProduct.findOne({where:{retailerId:foundRetailer.id,productId:el.id}});
      if(!foundProd)
      {
        const cat=await Category.findByPk(el.categoryId,{attributes:['category_name']});
        const manf=await Manufacturer.findByPk(el.manufacturerId,{attributes:['id','org_name','email']});
        let obj={'prodData':el,'manufData':manf,'category':cat.category_name};
      arr.push(obj);
    }
  }
  res.status(200).json({message:"Fetched By Popularity",products:arr});
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

/******************************Region-Wise  Similar Product PriceAnalysis**************************************************/
exports.similarProductPrice=async(req,res,next)=>{
  const prodId=req.params.prodId; 
  try
  {
    const foundUser=await User.findByPk(req.userId);    
    const foundRetailer=await foundUser.getRetailer();let arr=[];
    if(!foundRetailer)
      {
        const error = new Error("Retailer does not exist");
         error.statusCode = 404;
         throw error;
      }
   
    const foundRetailerProducts=await RetailerProduct.findAll({where:{[Op.not]:[{retailerId:foundRetailer.id}],productId:prodId}}); 
    
    for(let i=0;i<foundRetailerProducts.length;i++)
    {
      const retailerRegion=await RegionRetailer.findAll({where:{retailerProductId:foundRetailerProducts[i].id}});// foundRetailerProducts[i].getRegionRetailer();
      let obj={regionData:retailerRegion,retailerTotalData:foundRetailerProducts[i]};
      arr.push(obj);
    }
    res.status(200).json({message:"Analysis Report fetched",dataArr:arr});
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

/*************************************Allocate Regions of Interest to product and select price and stocks****************/
exports.postRegionsandPrice=async(req,res,next)=>{
  const prodId=req.body.prodId;
  const regionId=req.body.regionId;
  const price=+req.body.price;
  const stocks=+req.body.stocks;
  try
  {
    const foundUser=await User.findByPk(req.userId);    
      const foundRetailer=await foundUser.getRetailer();
      if(!foundRetailer)
      {
        const error = new Error("Retailer does not exist");
         error.statusCode = 404;
         throw error;
      }
    const retailerProd=await RetailerProduct.findOne({where:{retailerId:foundRetailer.id,productId:prodId}});
    if(stocks>retailerProd.units_avail)
    {
      const error = new Error("Insufficient Stock.Select a new stock count");
      error.statusCode = 500;
      throw error;
    }
    retailerProd.units_avail=retailerProd.units_avail-stocks;
    await retailerProd.save();
    const region=await Region.findByPk(regionId);
    await region.addRetailerProduct(retailerProd,{through:{regional_price:price,region:region.region,stock_count:stocks}});
    res.status(200).json({message:"Product Region Updated"});
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

/*****************************Purchase more stocks for a product *********************************************/
exports.addMoreProdUnits=async(req,res,next)=>{
  const prodId=req.body.prodId;
  const prodUnits=+req.body.units;
  try
  {
      const foundUser=await User.findByPk(req.userId);    
      const foundRetailer=await foundUser.getRetailer();
      if(!foundRetailer)
      {
        const error = new Error("Retailer does not exist");
         error.statusCode = 404;
         throw error;
      }
      const foundProduct=await Product.findByPk(prodId,{attributes:['id','offline_retailer_units']});

      
      
      const retailerProduct=await RetailerProduct.findOne({where:{retailerId:foundRetailer.id,productId:foundProduct.id}});
      
      if((prodUnits-retailerProduct.units_avail)>foundProduct.offline_retailer_units||retailerProduct.units_avail>prodUnits)
      {
        const error = new Error("Insufficient Stock.Select a new stock count");
         error.statusCode = 500;
         throw error;
      }
      foundProduct.offline_retailer_units-=(prodUnits-retailerProduct.units_avail);
      await foundProduct.save();
      retailerProduct.units_avail=prodUnits;
      await retailerProduct.save();
      res.status(200).json({message:"Units Updated"});
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

/*******************************Fetch Retailer Owned Products**************************************/
exports.fetchMyProds=async(req,res,next)=>{
  try
  {
    const foundUser=await User.findByPk(req.userId);    
    const foundRetailer=await foundUser.getRetailer();
      if(!foundRetailer)
      {
        const error = new Error("Retailer does not exist");
         error.statusCode = 404;
         throw error;
      }
      const retailerProds=await foundRetailer.getRetailerProducts();let arr=[];
      for(let i=0;i<retailerProds.length;i++)
      {
        let el=retailerProds[i];
        const foundProd=await Product.findByPk(el.productId);
        const regionStats=await RegionRetailer.findAll({where:{retailerProductId:el.id}});
        let obj={regionStats:regionStats,productInfo:foundProd,stats:el};
        arr.push(obj);
      }
      res.status(200).json({message:"Retailer Owned Products Fetched",arr:arr});

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

/************************Retailer Finding their most popular products ***********************/

exports.fetchMyMostPopProd=async(req,res,next)=>{
  try
  {
    const foundUser=await User.findByPk(req.userId);    
    const foundRetailer=await foundUser.getRetailer();
      if(!foundRetailer)
      {
        const error = new Error("Retailer does not exist");
         error.statusCode = 404;
         throw error;
      }
      const retailerProds=await foundRetailer.getRetailerProducts({order:[['units_sold','DESC']]});let arr=[];
      for(let i=0;i<retailerProds.length;i++)
      {
        let el=retailerProds[i];
        const foundProd=await Product.findByPk(el.productId);
        const regionStats=await RegionRetailer.findAll({where:{retailerProductId:el.id}});
        let obj={regionStats:regionStats,productInfo:foundProd,stats:el};
        arr.push(obj);
      }
      res.status(200).json({message:"Retailer Owned Popular Products Fetched",arr:arr});
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


/**************************Fetch Product Region Stats *********************************************/
exports.fetchProdRegionStats=async(req,res,next)=>{
  const prodId=req.params.prodId;
  try{
    const foundUser=await User.findByPk(req.userId);    
    const foundRetailer=await foundUser.getRetailer();
      if(!foundRetailer)
      {
        const error = new Error("Retailer does not exist");
         error.statusCode = 404;
         throw error;
      }
      const retailerProduct=await RetailerProduct.findOne({where:{retailerId:foundRetailer.id,productId:prodId}});
      const regions=await RegionRetailer.findAll({where:{retailerProductId:retailerProduct.id}});
      res.status(200).json({message:"RegionStatsFetched",regionStats:regions});
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

/*************************Update Region Wise-Sale Information ********************************/
exports.updateRegionalSaleInfo=async(req,res,next)=>{
  const prodId=req.body.prodId;
  const regionId=req.body.regionId;
  const price=+req.body.price;
  const sold_count=+req.body.unitsSold;
  const returned_count=+req.body.unitsReturned;
  const expired_count=+req.body.unitsExpired;
  const OOS=req.body.OOS;
  const in_sale=req.body.inSale;
  try
  {
    const foundUser=await User.findByPk(req.userId);    
    const foundRetailer=await foundUser.getRetailer();
      if(!foundRetailer)
      {
        const error = new Error("Retailer does not exist");
         error.statusCode = 404;
         throw error;
      }
    const retailerProd=await RetailerProduct.findOne({where:{retailerId:foundRetailer.id,productId:prodId}});
    const retailRegion=await RegionRetailer.findOne({where:{retailerProductId:retailerProd.id,regionId:regionId}});
    const product=await Product.findByPk(prodId,{attributes:['id','units_sold_total']});
    product.units_sold_total+=sold_count;
    retailRegion.regional_price=price;
    retailRegion.sold_count+=sold_count;
    retailRegion.returned_count+=returned_count;
    retailRegion.expired_count+=expired_count;
    retailRegion.out_of_stock=OOS;
    retailRegion.in_sale=in_sale;
    retailerProd.units_sold+=sold_count;
    await product.save();
    await retailerProd.save();
    await retailRegion.save();
    res.status(200).json({message:"Regional Sales Updated"});
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






  
