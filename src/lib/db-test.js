import mysql from "mysql";

const db = mysql.createConnection({
  host: '127.0.0.1', // replace with your MySQL database host name
  user: 'root', // replace with your MySQL database user name
  password: '', // replace with your MySQL database password
  database: 'topup_game', // replace with your MySQL database name
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

module.exports = db;
