const Category=require('../models/category');
const Region=require('../models/region');
const redisClient = require('../util/redis');


/****************************************Fetch Region*************************************/

exports.fetchRegions=async(req,res,next)=>{
    try
    {
      const foundRegions=await Region.findAll({attributes:['id','region','map_id']});
      var obj=JSON.stringify(foundRegions);
      redisClient.setex('allRegions', 300, obj);
      res.status(200).json({message:"Fetch success",regions:JSON.parse(obj)});
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
      const foundCategories=await Category.findAll({attributes:['id','category_name']});
      var obj=JSON.stringify(foundCategories);
      redisClient.setex('allCategories', 300, obj);
      res.status(200).json({message:"Fetch success",categories:JSON.parse(obj)});
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
  