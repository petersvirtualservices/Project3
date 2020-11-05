const express = require('express');
const mysql = require('mysql');
var session = require('express-session')
const bodyParser = require('body-parser');
const cors = require('cors');

// initialize the db
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'catshackdatabase',
});

// initialize the app
const app = express();

// add middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

// add session middleware
app.set('trust proxy', 1);
app.use(session({
  secret: 'topsecret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

/**
* Routes
**/

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/save_username', (req, res) => {
  // store the username to the session
  req.session.username = req.body.username;
  res.json({username: req.body.username});
})

app.get('/api/get', (req, res) => {
  const sqlSelect = 'SELECT * FROM catshackdatabase';
  db.query(sqlInsert, {name, catchoice}, (err, result) =>{
    res.send(result)
  });
});

app.post('/api/insert', (req, res) =>{
  const nameOne = req.body.name;
  const catChoiceOne = req.body.catchoice;
  console.log(error);
  const sqlInsert = 'INSERT INTO catshackdatabase (name, catchoice) VALUES (?,?)'
  db.query(sqlInsert, {name, catchoice}, (err, result) =>{
    console.log(result);
  })
});

// specify the port to use
var PORT = process.env.PORT || 4000;

app.listen(PORT, function() {
  console.log('Server listening on: http://localhost:' + PORT);
});