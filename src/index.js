const express = require("express");
const cors = require("cors");
const router = require('./routers');
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use('/api',router);

// app.use('/',(req,res)=>{
//   res.status(200).json({
//     name: "Dnyaneshwar Inchale"
//   })
// })

app.listen(3000,()=>{
  console.log('App is running on port:', 3000)
})
