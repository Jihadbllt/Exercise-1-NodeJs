const express = require('express');
const itemRoutes = require('../routes/itemRoutes');
const Subject = require('../services/subject');
const ObserverLogger = require('../services/observerLogger');
const ObserverNotifier = require('../services/observerNotifier');

const app = express();
const PORT = 3000;

const subject = new Subject();

const logger = new ObserverLogger();
const notifier = new ObserverNotifier();
subject.subscribe(logger);
subject.subscribe(notifier);

app.use(express.json());
app.use('/api',itemRoutes);
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
    subject.notify({ event: 'Item created', data: newItem});
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

    const deleteItem = items.splice(itemIndex, 1)[0];
    subject.notify({ event: 'item_deleted', data: deleteItem});
    res.status(204).send();
}));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;