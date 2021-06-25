const bcrypt = require('bcryptjs');
const User = require('../models/user');
const Category=require('../models/category');
const Manufacturer=require('../models/manufacturer');
const Employees=require('../models/employee');
const EmployeeManufacturer=require('../models/employeeManufacturer');
const Employer=require('../models/employer');
const RetailerProduct = require('../models/retailerProduct');
const RegionRetailer=require('../models/regionRetailer');
const Retailer = require('../models/retailer');
const {BlobServiceClient} = require('@azure/storage-blob');
const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
const { Readable } = require('stream');
const getBlobName = originalName => {
  const identifier = Math.random().toString().replace(/0\./, '');
  return `${identifier}-${originalName}`;
};

const ONE_MEGABYTE = 1024 * 1024;
const uploadOptions = { bufferSize: 8 * ONE_MEGABYTE, maxBuffers: 20 };


/***************************************NEW Manufacturer**************************************/
exports.postNewManufacturer=async(req,res,next)=>{
    const kassandraPortalID=req.body.kassandraPortalID;
    const password=req.body.password;
    const orgName=req.body.orgName;
    const email=req.body.email;
    const mobile=req.body.mobile;
    const address=req.body.address;
    const state=req.body.state;
    const city=req.body.city;
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
        const newUser=await User.create({k_PID:kassandraPortalID,password:hashedPwd,role:'Manufacturer'});
        const manufacturer=await newUser.createManufacturer({org_name:orgName,email:email,mobile:mobile,address:address,state:state,city:city,desc:ret_details});
        const employer=await Employer.create({org_name:orgName,type:"manufacturer",temp_id:manufacturer.id});

        res.status(200).json({message:"Manufacturer added!"});
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

/************************************************NEW PRODUCT MANUFACTURER************************************************/

exports.postNewProduct=async(req,res,next)=>{
  const prodName=req.body.prodName;
  const image=req.file;
  const snNo=req.body.snNo;
  const category=req.body.category;
  const desc=req.body.desc;
  const units=+req.body.units;
  const stream = Readable.from(image.buffer);
  try{
    const foundUser=await User.findByPk(req.userId);
    const foundManufacturer=await foundUser.getManufacturer();
    if(!foundManufacturer)
    {
      const error = new Error("Manufacturer does not exist");
       error.statusCode = 404;
       throw error;
    }
    const containerClient = blobServiceClient.getContainerClient(`${process.env.AZURE_CONTAINER_NAME}`);
    const blobName = image.originalname; 
    //getBlobName(image.originalname);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    let url;
    try{
      const data=await blockBlobClient.uploadStream(stream,uploadOptions.bufferSize, uploadOptions.maxBuffers, {blobHTTPHeaders: { blobContentType: "image/jpeg" } });
      // console.log(data);
      url=`${process.env.AZURE_HOST_NAME}`+`${process.env.AZURE_CONTAINER_NAME}/`+blobName;
    }
    catch
    {
      const error = new Error("Azure storage error");
       error.statusCode = 404;
       throw error;
    }
    const newProduct=await foundManufacturer.createProduct({prod_name:prodName,serial_no:snNo,desc:desc,units_avail:units,image:url});
    const foundCategory=await Category.findOne({where:{category_name:category},attributes:['id','category_name']});
    await foundCategory.addProduct(newProduct);  
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


/*******************************FETCH ALL Products****************************************** */
exports.fetchNewProducts=async(req,res,next)=>{
  try{
    const foundUser=await User.findByPk(req.userId);let obj={},products=[];
    const foundManufacturer=await foundUser.getManufacturer();
    if(!foundManufacturer)
    {
      const error = new Error("Manufacturer does not exist");
       error.statusCode = 404;
       throw error;
    }
    const allProducts=await foundManufacturer.getProducts({attributes:['id','image','prod_name','serial_no','units_avail',"offline_retailer_units","amazon_units","ebay_units","flipkart_units","units_sold_total","categoryId"]});
for(let i=0;i<allProducts.length;i++)
{
  let element=allProducts[i];
      const foundCategory=await Category.findByPk(element.categoryId,{attributes:['id','category_name']});
      obj={'id':element.id,'prodName':element.prod_name,'image':element.image,'SNO':element.serial_no,'unitsAvailable':element.units_avail,'retailerStock':element.offline_retailer_units,'amazonStock':element.amazon_units,'ebayStock':element.ebay_units,'flipkarStock':element.flipkart_units,'category':foundCategory.category_name};
      products.push(obj);
    }
    res.status(200).json({message:"Products Fetched",products:products});   
  
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

/******************************STOCK MANAGEMENT **************************************************/
exports.updateStock=async(req,res,next)=>{
  const offline_retailer_units=+req.body.offUnits;
  const amazon_units=+req.body.amazonUnits;
  const ebay_units=+req.body.ebayUnits;
  const flipkart_units=+req.body.flipkartUnits;
  const prodId=req.body.prodId;
  try{
    const foundUser=await User.findByPk(req.userId);
    const foundManufacturer=await foundUser.getManufacturer();
    if(!foundManufacturer)
    {
      const error = new Error("Manufacturer does not exist");
       error.statusCode = 404;
       throw error;
    }
    const foundProduct=await foundManufacturer.getProducts({where:{id:prodId},attributes:['id','offline_retailer_units','amazon_units','ebay_units','flipkart_units','units_avail']});
    //console.log(offline_retailer_units+amazon_units+ebay_units+flipkart_units);
    //console.log(foundProduct[0].units_avail);
    if(offline_retailer_units+amazon_units+ebay_units+flipkart_units>foundProduct[0].units_avail)
    {
      const error = new Error("Units Overflow. Check stock management and try again");
       error.statusCode = 404;
       throw error;
    }
    foundProduct[0].offline_retailer_units=offline_retailer_units;
    foundProduct[0].amazon_units=amazon_units;
    foundProduct[0].ebay_units=ebay_units;
    foundProduct[0].flipkart_units=flipkart_units;
    foundProduct[0].units_avail=foundProduct[0].units_avail-(amazon_units+offline_retailer_units+ebay_units+flipkart_units);
    await foundProduct[0].save();
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

/*********************************Update Product Unit*************************************************** */

exports.postProdUnits=async(req,res,next)=>{
  try
  {
    const prodId=req.body.prodId;
    const units=+req.body.newUnits;
    const foundUser=await User.findByPk(req.userId);
    const foundManufacturer=await foundUser.getManufacturer();
    if(!foundManufacturer)
    {
      const error = new Error("Manufacturer does not exist");
       error.statusCode = 404;
       throw error;
    }
    const foundProduct=await foundManufacturer.getProducts({where:{id:prodId},attributes:['id','units_avail']});
    foundProduct[0].units_avail=units;
    await foundProduct[0].save();
    res.status(200).json({message:"Product Units Updated!"});
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

/*********************Fetch Product Retailer****************************************/
exports.fetchProductRetailer=async(req,res,next)=>{
  const prodId=req.params.prodId;
  try
  {
    const foundUser=await User.findByPk(req.userId,{attributes:['id']});let obj={},finalarr=[];
    const foundManufacturer=await foundUser.getManufacturer({attributes:['id']});
    if(!foundManufacturer)
    {
      const error = new Error("Manufacturer does not exist");
       error.statusCode = 404;
       throw error;
    }
    const foundProductRetailers=await RetailerProduct.findAll({where:{productId:prodId},attributes:['id','retailerId']});
    for(let i=0;i<foundProductRetailers.length;i++)
    {
      let element=foundProductRetailers[i];
    //foundProductRetailers.forEach(async(element)=>{
      const foundRetailer=await Retailer.findByPk(element.retailerId,{attributes:['id','org_name','email','mobile','address','city','state']});
      const foundRegions=await RegionRetailer.findAll({where:{retailerProductId:element.id },attributes:['id','retailerProductId','regional_price','map_id','stock_count','sold_count','returned_count','expired_count','out_of_stock','in_sale']});
      obj={'retailer':foundRetailer,'regions':foundRegions};
      finalarr.push(obj);      
    }
res.status(200).json({message:"Product Retailers and Regions of Business Fetched",RetailerReg:finalarr});
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

/****************Fetch Top 5 Retailers for each Product*********************************/

exports.fetchTopRetailers=async(req,res,next)=>{
  const prodId=req.params.prodId;
  try
  {
    const foundUser=await User.findByPk(req.userId,{attributes:['id']});let obj={},finalarr=[];
    const foundManufacturer=await foundUser.getManufacturer({attributes:['id']});
    if(!foundManufacturer)
    {
      const error = new Error("Manufacturer does not exist");
       error.statusCode = 404;
       throw error;
    }
    const foundProductRetailers=await RetailerProduct.findAll({limit:5,where:{productId:prodId},attributes:['id','retailerId','productId','units_sold'],order:[['units_sold','DESC']]});
    //foundProductRetailers.forEach(async(element)=>{
      for(let i=0;i<foundProductRetailers.length;i++)
      {
        let element=foundProductRetailers[i];  
        const foundRetailer=await Retailer.findByPk(element.retailerId,{attributes:['id','org_name','email','mobile','address','city','state']});
        const foundRegions=await RegionRetailer.findAll({where:{retailerProductId:element.id },attributes:['id','retailerProductId','regional_price','map_id','stock_count','sold_count','returned_count','expired_count','out_of_stock','in_sale']});
        obj={'retailer':foundRetailer,'regions':foundRegions};
        finalarr.push(obj);      
    }
res.status(200).json({message:"Top 5 retailers for the product Fetched",RetailerReg:finalarr});
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

/***************Fetch Top Selling Products******************************/
exports.fetchTopProducts=async(req,res,next)=>{
  try{
    const foundUser=await User.findByPk(req.userId,{attributes:['id']});
    const foundManufacturer=await foundUser.getManufacturer({attributes:['id']});
    if(!foundManufacturer)
    {
      const error = new Error("Manufacturer does not exist");
       error.statusCode = 404;
       throw error;
    }
    const manfProducts=await foundManufacturer.getProducts({limit:10,order:[['units_sold_total','DESC']],attributes:['id','image','prod_name','serial_no','units_avail',"offline_retailer_units","amazon_units","ebay_units","flipkart_units","units_sold_total"]});
    res.status(200).json({message:"Top Products Fetched",products:manfProducts});    
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

/*************************Fetch Least Selling Products*************************/
exports.fetchLeastProducts=async(req,res,next)=>{
  try{
    const foundUser=await User.findByPk(req.userId,{attributes:['id']});
    const foundManufacturer=await foundUser.getManufacturer({attributes:['id']});
    if(!foundManufacturer)
    {
      const error = new Error("Manufacturer does not exist");
       error.statusCode = 404;
       throw error;
    }
    const manfProducts=await foundManufacturer.getProducts({limit:10,order:[['units_sold_total','ASC']],attributes:['id','image','prod_name','serial_no','units_avail',"offline_retailer_units","amazon_units","ebay_units","flipkart_units","units_sold_total"]});
    res.status(200).json({message:"Least Selling Products Fetched",products:manfProducts});    
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



/*****************Fetch Employees************************************ */
exports.fetchManEmployees=async(req,res,next)=>{
  try{
    const foundUser=await User.findByPk(req.userId,{attributes:['id']});
    const foundManufacturer=await foundUser.getManufacturer({attributes:['id']});
    if(!foundManufacturer)
    {
      const error = new Error("Manufacturer does not exist");
       error.statusCode = 404;
       throw error;
    }
    const employees=await foundManufacturer.getEmployees({attributes:['id','first_name','last_name','email','transactions_total']});
    res.status(200).json({message:"Manufacturer Employees Fetched!",employees:employees});

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

/*******************Fetch Top Perfoming Employees ******************************/
exports.fetchTopEmployees=async(req,res,next)=>{
  try{
    const foundUser=await User.findByPk(req.userId,{attributes:['id']});
    const foundManufacturer=await foundUser.getManufacturer({attributes:['id']});
    if(!foundManufacturer)
    {
      const error = new Error("Manufacturer does not exist");
       error.statusCode = 404;
       throw error;
    }
    const employees=await foundManufacturer.getEmployees({limit:5,order:[['transactions_total','DESC']],attributes:['id','first_name','last_name','email','transactions_total']});
    res.status(200).json({message:"Manufacturer Employees Fetched!",employees:employees});

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



