const express = require('express');
const router = express.Router();
const userController=require('../controllers/user');
const isAuth=require('../middleware/is-auth');
const cacheRedis=require('../middleware/redis-cache');

// router.get('/',retailerController.home);

router.post('/login',userController.login);

router.post('/logout',isAuth,userController.userLogout);

router.get('/allEmployers',cacheRedis.fetchEmployer,userController.fetchEmployer);

// router.get('/newProduct',isAuth,retailerController.postNewProduct);

module.exports=router;