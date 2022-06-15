// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const PORT = 4000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'mysqlcrud',
});

//Root Url
app.get('/', (req, res) => {
  res.send('hello world, Ripon');
});

// hello

app.listen(process.env.PORT || PORT, () => {
  console.log('Yey, your server is running on port 4000');
});
