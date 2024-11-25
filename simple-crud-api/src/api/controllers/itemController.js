const { it } = require('node:test');
const Item = require('../../domain/item/itemEntity');
const itemRepository = require('../../domain/item/itemRepository');
const eventService = require ('../services/eventService');  

const getAllItems = (req, res) => {
    const items = itemRepository.findAll();
    res.json(items);
};

const getItemById = (req, res) => {
    const Item = itemRepository.findById(parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    res.json(item);
};

const createItem = (req, res) => {
    const { name, description} = req.body;
    const newItem = new Item(Date.now(), name, description);
    itemRepository.save(newItem);

    eventService.emit('itemCreated', newItem);
    res.status(201).json(newItem);
};
eventService.on('itemCreated', (item) => {
    console.log('Item created event received:', item);
});

const updateItem = (req, res) => {
    const item = itemRepository.findById(parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    item.updateDetails(req.body.name, req.body.description);
    itemRepository.update(item);
    res.json(item);
};

const deleteItem = (req, res) =>{
    const success = itemRepository.deleteById(parseInt(req.params.id));
    if (!success) return res.status(404).send('Item not found');
    res.status(204).send();
};

module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
};
