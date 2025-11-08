const express = require('express');
const router = express.router();
const {createOrder} = require('./controller/orderController');

router.route('/order').post(createOrder)

module.exports = router;