const express = require('express');
const router = express.Router();
const manufacturerController=require('../controllers/manufacturer');
const isAuth=require('../middleware/is-auth');

// router.get('/',retailerController.home);

router.post('/signup',manufacturerController.postNewManufacturer);

module.exports=router;