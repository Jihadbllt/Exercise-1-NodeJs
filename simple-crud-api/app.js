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

app.post('/items', (res, req => {
    const newItem = {
        id: items.length +1,
        name: req.body.name,
        descrpition: req.body.descrpition
    };
    items.push(newItem);
    res.status(201).json(newItem);
}));

app.put('/items/:id', (res, req =>{
    const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).send('Item not found');

    items[itemIndex] = {
        ...items[itemIndex],
        name:req.body.name,
        descrpition: req.body.descrpition
    };
    res.json(items[itemIndex]);
}));

app.delete('/items/:id', (res, req => {
    const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).send('Item not found');

    items.splice(itemIndex, 1);
    res.status(204).send();
}));

