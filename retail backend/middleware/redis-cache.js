const redisClient = require('../util/redis');
exports.fetchEmployer=(req,res,next)=>{
    redisClient.get('allEmployers', (error, cachedData) => {
        if (error) throw error;
        if (cachedData != null) {
            res.status(200).json({message:"Fetch Success",obj:JSON.parse(cachedData)});
        } else {
          next();
        }
      });
    
}