const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const authController = require('../controllers/authentication');
const sessionController = require('../controllers/sessions');


//ENV
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

/*
// monogoURI
const mongoURI = `mongodb+srv://willemro:${process.env.PW}@bakeit.ixry9we.mongodb.net/?retryWrites=true&w=majority`;

// connect to mongoose
mongoose.connect(mongoURI)
  .then(()=>console.log('Connected to MongoDB'))
  .catch((err)=>console.log(`Error connecting to MongoDB:${err}`));
  */

app.use(express.json());
app.use(express.urlencoded());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


//controllers will go here

// send static stuff
app.get('/', (req, res) => {
  res.sendFile(__dirname, '../client/index.html');
});

app.use(sessionController.getSessionId);

app.post('/login', authController.validate, (req, res) => {
  const errors = validationResult(req);
	if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
	}
	else {
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
	}
});


// catchall

// global errors 


app.listen(PORT, () => console.log(`This app is listening on port ${PORT}`));

