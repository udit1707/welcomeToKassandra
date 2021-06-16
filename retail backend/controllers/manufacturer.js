const bcrypt = require('bcryptjs');
const User = require('../models/user');
const Manufacturer=require('../models/manufacturer');
const Employer=require('../models/employer');



/***************************************NEW Manufacturer**************************************/
exports.postNewManufacturer=async(req,res,next)=>{
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
        const newUser=await User.create({k_PID:kassandraPortalID,password:hashedPwd,role:'Manufacturer'});
        const manufacturer=await newUser.createManufacturer({org_name:orgName,email:email,mobile:mobile,address:address,desc:ret_details});
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

