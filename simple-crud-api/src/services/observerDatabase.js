const db = require('../infra/sqlite');

class ObserverDatabase {
    update(data){
        db.run('INSERT INTO logs (message) VALUE (?)', [data.message], function(err){
            if (err) {
                console.error('Database Error:', err.message);
            } else {
                console.log('Log saved to database with ID: ', this.lastID);
            }
        });
    }
}

module.exports = ObserverDatabase;