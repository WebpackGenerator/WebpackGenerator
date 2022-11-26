const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');

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
app.use(cookieParser());

//controllers will go here

// send static stuff

// catchall

// global errors 