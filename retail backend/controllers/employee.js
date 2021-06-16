const bcrypt = require('bcryptjs');
const User = require('../models/user');
const Retailer=require('../models/retailer');
const Manufacturer=require('../models/manufacturer');
const EmployeeManufacturer=require('../models/employeeManufacturer');
const EmployeeRetailer=require('../models/employeeRetailer');
const Employee=require('../models/employee');
const Employer = require('../models/employer');

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
        const employer=await Employer.findByPk(employerId,{attributes:['temp_id','type','org_name']});
        if(employer)
        {
        const newEmployee=await newUser.createEmployee({first_name:firstName,last_name:lastName,email:email,org_name:employer.org_name,mobile:mobile});
        if(employer.type=='manufacturer')
        {
          const manuf=await Manufacturer.findByPk(employer.temp_id);
          await manuf.addEmployee(newEmployee,{through:EmployeeManufacturer});
        }
        else
        {
          const retail=await Retailer.findByPk(employer.temp_id);
          await retail.addEmployee(newEmployee,{through:EmployeeRetailer});
        }     
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