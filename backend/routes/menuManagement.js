const express = require('express');
const router = express.Router();
const { fetchMenu, addMenuItem, updateMenuItem, deleteMenuItem } = require('../controllers/menuManagement');  

router.get('/', fetchMenu); //fetch all menu items
router.post('/', addMenuItem);  //add a new menu item
router.put('/:id', updateMenuItem); //update a menu item
router.delete('/:id', deleteMenuItem); //delete a menu item

module.exports = router;
