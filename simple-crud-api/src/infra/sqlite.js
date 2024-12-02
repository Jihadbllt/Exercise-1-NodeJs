const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run('CREATED TABLE logs (id INTEGER PRIMARY KEY, message TEXT)');
});

module.exports = db;