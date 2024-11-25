const express = require('express');

const {getAllItems, getItembyId, createItem, updateItem, deleteItem } = require ('../api/controllers/itemController');

const router = express.Router();

router.get('/items', getAllItems);
router.get('/items',getItembyId);
router.get('/items',createItem);
router.get('/items',updateItem);
router.get('/items',deleteItem);

module.exports = router;