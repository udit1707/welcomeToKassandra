const express = require('express');
const router = express.Router();
const employeeController=require('../controllers/employee');
const isAuth=require('../middleware/is-auth');

// router.get('/',retailerController.home);

router.post('/signup',employeeController.postNewEmployee);

module.exports=router;