const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const connectDatabase = require("./config/connectDatabase")
dotenv.config({path: path.join(__dirname,'config','config.env')});

const products = require('./routes/product');
const orders = require("./routes/order");
const { connect } = require('http2');

connectDatabase();
app.use('/api/v1/',products);
app.use('/api/v1/',orders);

app.listen(process.env.PORT,()=>{
    console.log(`Server listening to Port ${process.env.PORT} in ${process.env.NODE_ENV}`)
});