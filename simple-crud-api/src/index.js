const express = require("express");
const app = express();
app.use(express.json());
const db = require("./db")
const port = 3000;

const Observable = require ("./Observable");
const logSubscriber = require("./subscribers/logSubscriber");
const notifySubscriber = require ("./subscribers/notifySubscriber");
const emailSubscriber = require ("./subscriber/emailSubscriber");
const databaseLogSubscriber = require ("./subscribers/databaseLogSubscriber");

app.post("/", (req, res) => {
    const { name, createdAt} = req.body
    if (!name || !createdAt) {
        return res.status(400).json({message: "Name and createdAt are required"});
    }
    const newData = { name, createdAt}

    console.log("Resource created: ", newData);

    res.status(201).json({message: "Resource Created", data: newData});
});

app.get("/", (req, res) => {
    db.all(`Select * FROM resources`, [], (err, rows) => {
        if (err){
            console.error("Error fetching resources:", err.message);
            return res.status(500).json({message: "Error fetching resources"});
        }
        res.json({ data: rows});
    })

})

app.listen(port, () => {
    console.log(`Running here ... http://localhost:${port}/`);
})