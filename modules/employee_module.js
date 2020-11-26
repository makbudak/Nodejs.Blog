const sqlite3 = require('sqlite3')
let db = new sqlite3.Database("./database/chinook.db", (err) => {
    if (err) {
        console.log('Error when creating the database', err)
    }
});

let employees = db.all(`SELECT * FROM employees`, (err, row) => {
    if (err) {
        console.log(err);
        return;
    }
    return row;
});

module.exports = {
    employees: employees
}