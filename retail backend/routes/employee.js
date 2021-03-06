const express = require('express');
const router = express.Router();
const employeeController=require('../controllers/employee');
const isAuth=require('../middleware/is-auth');

/***************************************NEW Employee**************************************/
router.post('/signup',employeeController.postNewEmployee);

/**********************************Fetch Own Details *************************************/
router.get('/myprofile',isAuth,employeeController.fetchOwnDetails);

/********************************************Post thumbs up *******************************/
router.post('/submitThumbsUp',isAuth,employeeController.postEmployeeThumbsUp);

/*********************************POST Thumbs Down **************************************/
router.post('/submitThumbsDown',isAuth,employeeController.postEmployeeThumbsDown );

/***********************************Generate Product List ************************************/
router.get('/products',isAuth,employeeController.fetchProductList);

/************************************POST A New Transaction **********************************/
router.post('/newTransaction',isAuth,employeeController.postTransaction);

/***************************************Fetch Recent Transactions **********************************/
router.get('/myTransactions',isAuth,employeeController.fetchMyTransactions);

/******************************************JOB Recommender ****************************************/
router.get('/recommendations',employeeController.fetchJobs);

/**************************************************Fetch Feedback Sentiments *******************************/
router.get('/getSentiment',employeeController.fetchFeedBackSentiment);


module.exports=router;