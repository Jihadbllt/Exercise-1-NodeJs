const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

let items = [
    {id: 1, name: 'Item 1', descrpition: 'This is Item 1'},
    {id: 2, name: 'Item 2', descrpition: 'This is Item 2'}
];

app.get('/items', (req, res => {
    res.json(items);
}));

app.get('/items/:id', (res,req => {
    const item = items.find(i=> i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    res.json(item);
}));

