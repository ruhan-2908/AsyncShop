const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path: path.join(__dirname,'config','config.env')});
app.listen(process.env.PORT,()=>{
    console.log(`Server listening to Port ${process.env.PORT} in ${process.env.NODE_ENV}`)
});