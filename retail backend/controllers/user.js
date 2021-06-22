const User=require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Employer=require('../models//employer');
//Creating Redis client on Redis port
const redisClient = require('../util/redis');




//post Route for login
exports.login=async (req,res,next)=>{
    const k_PID=req.body.kassandraPortalId;
    const password=req.body.password;
    let validUser;
    try
    {
        const user=await User.findOne({where:{k_PID:k_PID}});
        if (!user) 
        {
          const error = new Error('A user with this username could not be found.');
          error.statusCode = 401;
          throw error;
        }
        const isEqual=await bcrypt.compare(password,user.password);  
        if (!isEqual)
        {
          const error = new Error('Wrong password!');
          error.statusCode = 401;
          throw error;
        }
        const token=jwt.sign({ kID:user.k_PID,userId:user.id,role:user.role},'somesupersecretsecret',{expiresIn:'180m'});
        const refreshToken=jwt.sign({ kID:user.k_PID,userId:user.id,role:user.role},'somesuperrefreshsecretsecret',{expiresIn:'3600m'});
        user.refreshToken=refreshToken;
        await user.save();        
        /********************************************/
        res.status(200).json({message:"Login Success",token:token,refreshToken:refreshToken,userId:user.id,role:user.role});
    }
    catch(err)
    {        
        if (!err.statusCode) 
        {
          err.statusCode = 500;
        }
        next(err);
    }      
  };

  //***********refresh the token***************************//
  exports.refreshToken=async(req,res,next)=>{
    const id=req.body.userId;
    const refreshToken=req.body.refreshToken;let newAccessToken,decodedToken;
    try
    {
        const user=await User.findByPk(id);
        if(user.refreshToken===refreshToken)
        {
          try
          {
            decodedToken =jwt.verify(refreshToken,'somesuperrefreshsecretsecret');
          }
          catch(err)
          {
            err.message='Refresh Token Expired. Re-Enter credentials to login!'
            err.statusCode = 401;
            throw err;
          }      
          newAccessToken=jwt.sign({ kID:user.k_PID,userId:user.id,role:user.role},'somesupersecretsecret',{expiresIn:'25m'});
        }
        else
        {
          const error = new Error('Invalid Request.Refresh Token not Found. Login again !.');
          error.statusCode = 401;
          throw error;
        }
        res.status(200).json({message:"Tokens updated",newAccessToken:newAccessToken});
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


  //Get Route to fetch Employee
  exports.fetchEmployer=async(req,res,next)=>{
      try{
        const employers=await Employer.findAll({attributes:['id','org_name']});let id=[],name=[];
        if(employers)
        {
          employers.forEach(element => {
            id.push(element.id);
            name.push(element.org_name);            
          });
        }
        var obj={id:id,orgs:name};
        obj=JSON.stringify(obj);
        redisClient.setex('allEmployers', 300, obj);
        //console.log(id);
        //console.log(name);
        res.status(200).json({message:"Fetch Success",obj:JSON.parse(obj)});
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

//Post Route to logout
exports.userLogout=async(req,res,next)=>{
  try
  {
    const user=await User.findByPk(req.userId);//query to fetch the user
    user.refreshToken=null;//destroy refresh token
    await user.save();
    res.status(201).json({message:"User Logged out Succees"});
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

