const bcrypt = require('bcryptjs');
const User = require('../models/user');
const Retailer=require('../models/retailer');
const Manufacturer=require('../models/manufacturer');
const EmployeeManufacturer=require('../models/employeeManufacturer');
const EmployeeRetailer=require('../models/employeeRetailer');
const Employee=require('../models/employee');
const Employer = require('../models/employer');
const ProductTransaction=require('../models/productTransaction');
const RetailerProduct = require('../models/retailerProduct');
const Product = require('../models/product');
const { default: axios } = require('axios');
const deepai = require('deepai');
deepai.setApiKey(process.env.API_KEY_DEEPAI);


/***************************************NEW Employee**************************************/
exports.postNewEmployee=async(req,res,next)=>{
    const kassandraPortalID=req.body.kassandraPortalID;
    const password=req.body.password;
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const email=req.body.email;
    const mobile=req.body.mobile;
    const employerId=req.body.employerId; 
  
     try{
        const existinguser=await User.findOne({where:{k_PID:kassandraPortalID},attributes:['id','k_PID']});
        if(existinguser)
        {
          const error = new Error(`"Kassandra Portal ID" exists. Select a unique ID`);
          error.statusCode = 404;
          throw error;
        }
        const hashedPwd=await bcrypt.hash(password,12);
        const newUser=await User.create({k_PID:kassandraPortalID,password:hashedPwd,role:'Employee'});
        const employer=await Employer.findByPk(employerId,{attributes:['id','temp_id','type','org_name']});
        if(employer)
        {
        const newEmployee=await newUser.createEmployee({first_name:firstName,last_name:lastName,email:email,org_name:employer.org_name,mobile:mobile});
        if(employer.type=='manufacturer')
        {
          const manuf=await Manufacturer.findByPk(employer.temp_id,{attributes:['id']});
          await manuf.addEmployee(newEmployee,{through:EmployeeManufacturer});
        }
        else
        {
          const retail=await Retailer.findByPk(employer.temp_id,{attributes:['id']});
          await retail.addEmployee(newEmployee,{through:EmployeeRetailer});
        }   
        await employer.addEmployee(newEmployee);
      }
      else
      {
        const error = new Error(`"No such Organization in DB`);
        error.statusCode = 404;
        throw error;

      }   
        res.status(200).json({message:"Employee added!"});
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


/**********************************Fetch Own Details *************************************/
exports.fetchOwnDetails=async(req,res,next)=>{
  try
  {
    const foundUser=await User.findByPk(req.userId,{attributes:['id']});    
    const foundEmployee=await foundUser.getEmployee({attributes:['id','first_name','last_name','email','mobile','transactions_total','employerId']});
    if(!foundEmployee)
    {
      const error = new Error("Retailer does not exist");
       error.statusCode = 404;
       throw error;
    }
    const employer=await Employer.findByPk(foundEmployee.employerId,{attributes:['id','type','temp_id']});
    let domain,employerDetails;
    domain="Manufacturer";
    if(employer.type=='retailer')
    { 
      employerDetails=await Retailer.findByPk(employer.temp_id,{attributes:['id','org_name','email','address','employee_happ_index']});
      domain="Retailer";
    }
    else
    {
      employerDetails=await Manufacturer.findByPk(employer.temp_id,{attributes:['id','org_name','email','address','employee_happ_index']})
    }
    res.status(200).json({message:"Employee fetched",employee:foundEmployee,employer:employerDetails,domain:domain});
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

/********************************************Post thumbs up *******************************/
exports.postEmployeeThumbsUp=async(req,res,next)=>{
  try
  {
    const foundUser=await User.findByPk(req.userId,{attributes:['id']});    
    const foundEmployee=await foundUser.getEmployee({attributes:['id','employerId']});
    if(!foundEmployee)
    {
      const error = new Error("Retailer does not exist");
       error.statusCode = 404;
       throw error;
    }
    const employer=await Employer.findByPk(foundEmployee.employerId,{attributes:['id','type','temp_id']});
    if(!employer)
    {
      const error = new Error("Given Employer does not exist");
       error.statusCode = 404;
       throw error;
    }
    let employerDetails;
    if(employer.type=="retailer")
    { 
      employerDetails=await Retailer.findByPk(employer.temp_id,{attributes:['id','employee_happ_index','total_thumbs','sum_thumb']});
    }
    else
    {
      employerDetails=await Manufacturer.findByPk(employer.temp_id,{attributes:['id','employee_happ_index','total_thumbs','sum_thumb']});
    }
    employerDetails.total_thumbs+=1;
    employerDetails.sum_thumb+=1;
    employerDetails.employee_happ_index=(employerDetails.sum_thumb)/(employerDetails.total_thumbs);
    await employerDetails.save();
    res.status(200).json({message:"Thumb Updated!"});
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

/*********************************POST Thumbs Down **************************************/
exports.postEmployeeThumbsDown=async(req,res,next)=>{
  try
  {
    const foundUser=await User.findByPk(req.userId,{attributes:['id']});    
    const foundEmployee=await foundUser.getEmployee({attributes:['id','employerId']});
    if(!foundEmployee)
    {
      const error = new Error("Retailer does not exist");
       error.statusCode = 404;
       throw error;
    }
    const employer=await Employer.findByPk(foundEmployee.employerId,{attributes:['id','type','temp_id']});
    if(!employer)
    {
      const error = new Error("Given Employer does not exist");
       error.statusCode = 404;
       throw error;
    }
    let employerDetails;
    if(employer.type=="retailer")
    { 
      employerDetails=await Retailer.findByPk(employer.temp_id,{attributes:['id','employee_happ_index','total_thumbs','sum_thumb']});
    }
    else
    {
      employerDetails=await Manufacturer.findByPk(employer.temp_id,{attributes:['id','employee_happ_index','total_thumbs','sum_thumb']});
    }
    employerDetails.total_thumbs+=1;
    employerDetails.sum_thumb-=1;
    employerDetails.employee_happ_index=(employerDetails.sum_thumb)/(employerDetails.total_thumbs);    
    await employerDetails.save();
    res.status(200).json({message:"Thumb Updated!"});
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

/***********************************Generate Product List ************************************/
exports.fetchProductList=async(req,res,next)=>{
  try
  {
    const foundUser=await User.findByPk(req.userId,{attributes:['id']});    
    const foundEmployee=await foundUser.getEmployee({attributes:['id','employerId']});
    if(!foundEmployee)
    {
      const error = new Error("Retailer does not exist");
       error.statusCode = 404;
       throw error;
    }
    const employer=await Employer.findByPk(foundEmployee.employerId,{attributes:['id','type','temp_id']});
    let products;
    if(employer.type=='retailer')
    {
      products=await RetailerProduct.findAll({where:{retailerId:employer.temp_id},attributes:['retailerId','image','prod_name','productId']});
    }
    else
    {
      products=await Product.findAll({where:{manufacturerId:employer.temp_id},attributes:['manufacturerId','image','prod_name','id']});
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

/************************************POST A New Transaction **********************************/
exports.postTransaction=async(req,res,next)=>{
  const transactionNo=req.body.transNo;
  const feedback=req.body.feedback;
  const prodId=req.body.prodId;
  try
  {
    const foundUser=await User.findByPk(req.userId,{attributes:['id']});    
    const foundEmployee=await foundUser.getEmployee({attributes:['id']});
    if(!foundEmployee)
    {
      const error = new Error("Retailer does not exist");
       error.statusCode = 404;
       throw error;
    }
    const found=await ProductTransaction.findOne({where:{transaction_no:transactionNo},attributes:['id','transaction_no']});
    if(found)
    {
      const error = new Error("Transaction Number already registered");
       error.statusCode = 404;
       throw error;
    }
    const newTransaction=await foundEmployee.createProductTransaction({transaction_no:transactionNo,prodId:prodId,feedback:feedback})
    foundEmployee.transactions_total+=1;
    await foundEmployee.save();
    res.status(200).json({message:"Transaction Posted"});
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


/******************************************JOB Recommender ****************************************/
exports.fetchJobs=async(req,res,next)=>{
  try
  {
    const recommendedManf=await Manufacturer.findAll({limit:5,order:[['employee_happ_index','DESC']],attributes:['id','org_name','email','address','employee_happ_index']});
    const recommendRetail=await Retailer.findAll({limit:5,order:[['employee_happ_index','DESC']],attributes:['id','org_name','email','address','employee_happ_index']})
    res.status(200).json({message:"Recommendations Fetched",Manufacturer:recommendedManf,Retailer:recommendRetail});
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

/***************************************Fetch Recent Transactions **********************************/
exports.fetchMyTransactions=async(req,res,next)=>{
  try
  {
    const foundUser=await User.findByPk(req.userId,{attributes:['id']});    
    const foundEmployee=await foundUser.getEmployee({attributes:['id']});
    if(!foundEmployee)
    {
      const error = new Error("Retailer does not exist");
       error.statusCode = 404;
       throw error;
    }
    let arr=[];
    const foundTransactions=await foundEmployee.getProductTransactions({attributes:['id','feedback','transaction_no','prodId']});
    for(let i=0;i<foundTransactions.length;i++)
    {
      const product=await Product.findByPk(foundTransactions[i].prodId,{attributes:['id','prod_name','image','serial_no']});
      let obj={product:product,transaction:foundTransactions[i]};
      arr.push(obj);    }
    res.status(200).json({message:"Transactions Fetched",arr:arr});
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

/**************************************************Fetch Feedback Sentiments *******************************/
exports.fetchFeedBackSentiment=async(req,res,next)=>{
  const feedback=req.query.feedback;
  try
  {
    const sentiment = await deepai.callStandardApi("sentiment-analysis", {
      text: feedback});
    console.log(sentiment);
    res.status(200).json({message:"Sentiment Fetched",sentiment:sentiment.output});
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