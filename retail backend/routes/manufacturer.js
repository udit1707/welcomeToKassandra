const express = require('express');
const router = express.Router();
const manufacturerController=require('../controllers/manufacturer');
const isAuth=require('../middleware/is-auth');
const upload=require('../middleware/multer');

// router.get('/',retailerController.home);
/***************************************NEW Manufacturer**************************************/
router.post('/signup',manufacturerController.postNewManufacturer);

/************************************************NEW PRODUCT MANUFACTURER************************************************/
router.post('/newProduct',isAuth,upload.upload.single('image'),manufacturerController.postNewProduct);

/*******************************FETCH ALL Products****************************************** */
router.get('/products',isAuth,manufacturerController.fetchNewProducts);

/******************************STOCK MANAGEMENT **************************************************/
router.post('/updateprodStock',isAuth,manufacturerController.updateStock);

/*********************************Update Product Unit*************************************************** */
router.post('/updateUnits',isAuth,manufacturerController.postProdUnits);

/*********************Fetch Product Retailer****************************************/
router.get('/product-retailers/:prodId',isAuth,manufacturerController.fetchProductRetailer);

/****************Fetch Top 5 Retailers for each Product*********************************/
router.get('/top-retailers/:prodId',isAuth,manufacturerController.fetchTopRetailers);

/***************Fetch Top Selling Products******************************/
router.get('/top-products',isAuth,manufacturerController.fetchTopProducts);

/*************************Fetch Least Selling Products*************************/
router.get('/inloss-products',isAuth,manufacturerController.fetchLeastProducts);

/**********************Product Sales Analysis ******************************************/
router.get('/prouct-regional-sales/:prodId',isAuth,manufacturerController.productSalesAnalysis);

router.get('/employees',isAuth, manufacturerController.fetchManEmployees);

router.get('/topEmployees',isAuth,manufacturerController.fetchTopEmployees)
module.exports=router;