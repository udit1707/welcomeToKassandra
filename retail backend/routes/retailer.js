const express = require('express');
const router = express.Router();
const retailerController=require('../controllers/retailer');
const isAuth=require('../middleware/is-auth');

// router.get('/',retailerController.home);

router.post('/signup',retailerController.postNewRetailer);

router.post('/newProduct',isAuth,retailerController.postNewProduct);

router.get('/regionStock',isAuth,retailerController.fetchRegionStocks);

module.exports=router;