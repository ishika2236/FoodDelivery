const orderModel = require('../models/orderModel');


const fetchOrders = async (req, res) => {
    try {
        const orders = await orderModel.find();
        res.status(200).send(orders);
    } catch (error) {
        res.status(500).send({ error: `Error while fetching orders: ${error.message}` });
    }
};
const fetchOrderByUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        const orders = await orderModel.find({ userId });
        res.status(200).send(orders);
    } catch (error) {
        res.status(500).send({ error: `Error while fetching orders: ${error.message}` });
    }
};

const addOrder = async (req, res) => {
    const { userId, items, total } = req.body;
    try {
        const newOrder = await orderModel.create({ userId, items, total });
        res.status(201).send(newOrder);
    } catch (error) {
        res.status(400).send({ error: `Error while adding order: ${error.message}` });
    }
};

module.exports = { fetchOrders, fetchOrderByUser, addOrder };

