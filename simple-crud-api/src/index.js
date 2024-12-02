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
})