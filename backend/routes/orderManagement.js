const express = require('express');
const router = express.Router();
const { fetchOrders, addOrder, fetchOrderByUser } = require('../controllers/orderManagement');

router.get('/', fetchOrders); //fetch all orders for the existing user
router.post('/', addOrder); //place an order with selected items
router.get('/:userId', fetchOrderByUser); //fetch all orders for a specific user
module.exports = router;