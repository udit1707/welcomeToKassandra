const express = require('express');
const router = express.Router();
const miscController=require('../controllers/misc');
const cacheRedis=require('../middleware/redis-cache');


router.get('/allRegions',cacheRedis.fetchRegions,miscController.fetchRegions);

router.get('/allCategories',cacheRedis.fetchCategories,miscController.fetchCategory);

module.exports=router;