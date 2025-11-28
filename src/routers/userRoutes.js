const express = require('express');
const router = express.Router();
router.get('/list',(req,res)=>{
  res.send('Fetched user list')
})
module.exports = router