// run `node index.js` in the terminal
// dbpass:jAmOpZl08h
// username:wM1029szRH
// dbname:wM1029szRH

// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const PORT = 4000;

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  // user: 'root',
  // host: 'localhost',
  // password: '',
  // database: 'test2',

  // connectionLimit: 1000,
  // connectTimeout: 60 * 60 * 1000,
  // acquireTimeout: 60 * 60 * 1000,
  // timeout: 60 * 60 * 1000,

  user: 'wM1029szRH',
  host: 'remotemysql.com',
  password: 'jAmOpZl08h',
  database: 'wM1029szRH',
});

console.log(db);

//Root Url
app.get('/', (req, res) => {
  res.send('hello world, Ripon');
});

//All Todo List fecth
app.get('/all', (req, res) => {
  db.query('SELECT * FROM `test`', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// hello

app.listen(process.env.PORT || PORT, () => {
  console.log('Yey, your server is running on port 4000');
});
