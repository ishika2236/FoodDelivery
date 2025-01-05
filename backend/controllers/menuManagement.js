const menuModel = require('../models/menuModel');

const fetchMenu = async (req, res) => {
    try {
        const menu = await menuModel.find();
        res.status(200).send(menu);
    } catch (error) {
        res.status(500).send({ error: `Error while fetching menu: ${error.message}` });
    }
};

const fetchMenuByCategory = async (req, res) => {
    const category = req.params.category;
    try {
        const menu = await menuModel.find({ category});
        res.status(200).send(menu);
    }
    catch (error) {
        res.status(500).send({ error: `Error while fetching menu: ${error.message}` });
    }
};
const addMenuItem = async (req, res) => {
    const { name, price, category, image, available } = req.body;
    try {
        const newMenuItem = await menuModel.create({ name, price, category, image, available });
        res.status(201).send(newMenuItem);
    } catch (error) {
        res.status(400).send({ error: `Error while adding menu item: ${error.message}` });
    }
};

const updateMenuItem = async (req, res) => {
    const id = req.params.id;
    const { name, price, category, image, available } = req.body;
    try {
        const updatedMenuItem = await menuModel.findByIdAndUpdate(id, { name, price, category, image, available }, { new: true });
        res.status(200).send(updatedMenuItem);
    }
    catch (error) {
        res.status(400).send({ error: `Error while updating menu item: ${error.message}` });
    }
};

const deleteMenuItem = async (req, res) => {
    const id = req.params.id;
    try {
        await menuModel.findByIdAndDelete(id);
        res.status(200).send('Menu item deleted successfully');
    }
    catch (error) {
        res.status(400).send({ error: `Error while deleting menu item: ${error.message}` });
    }
};

module.exports = { fetchMenu, fetchMenuByCategory, addMenuItem, updateMenuItem, deleteMenuItem };