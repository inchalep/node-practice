const express = require('express');
const userRoutes = require('./userRoutes');
const router = express.Router();

router.post('/test-request',(req,res)=>{
  res.status(200).json('Hello')
})

router.use('/user',userRoutes)

module.exports=router