const router =require('express').Router();
const codechefAPIController=require('../controller/codechefAPIController');

// user login 
router.get("/data",codechefAPIController.codechefdata)


module.exports=router;