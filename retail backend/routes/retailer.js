const express = require('express');
const router = express.Router();
const retailerController=require('../controllers/retailer');
const isAuth=require('../middleware/is-auth');

router.post('/signup',retailerController.postNewRetailer);

/*************************Add Product******************************************/
router.post('/newProduct',isAuth,retailerController.postNewProduct);

/*******************************Fetch Retailer Owned Products********************************/
router.get('/myProducts',isAuth,retailerController.fetchMyProds);

/************************Retailer Finding their most popular products ***********************/
router.get('/myPopProds',isAuth,retailerController.fetchMyMostPopProd);

/**************************Fetch Product Region Stats *********************************************/
router.get('/productsRegions/:prodId',isAuth,retailerController.fetchProdRegionStats);

/*************************Update Region Wise-Sale Information ********************************/
router.post('/updateProdRegionSales',isAuth,retailerController.updateRegionalSaleInfo);

/*************************************Allocate Regions of Interest to product and select price and stocks****************/
router.post('/productBusiness',isAuth,retailerController.postRegionsandPrice);

/*****************************Purchase more stocks for a product *********************************************/
router.post('/updateStocks',isAuth,retailerController.addMoreProdUnits);

/*************************Fetch Product by Category******************************************/
router.get('/prodbyCat/:catId',isAuth,retailerController.fetchProdByCategory);

/*****************************Fetch Products by Popularity ***********************************/
router.get('/prodbyPop',isAuth,retailerController.fetchProdByPop);

/******************************Region-Wise  Similar Product PriceAnalysis**************************************************/
router.get('/regionalPriceAnalysis/:prodId',isAuth,retailerController.similarProductPrice);

/****************************SMART PRICE Predictor********************************/
router.get('/price/:prodId',isAuth,retailerController.predictPrice);

/*****************************Fetch Employees ************************************/
router.get('/allEmployees',isAuth, retailerController.fetchRetaEmployees);

/*******************Fetch Top Perfoming Employees ******************************/
router.get('/topEmployees',isAuth,retailerController.fetchTopEmployees);

module.exports=router;