const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Password1!",
        database: "burgers_db"
    });
};


  connection.connect( err => {
    if (err) throw err;
    console.log(`Connected as id:${connection.threadId}`);
  });
  
  module.exports = connection;