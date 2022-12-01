const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const authController = require('./controllers/authentication');
const sessionController = require('./controllers/sessions');
const userController = require('./controllers/userController')
const validator = require('express-validator');
const session = require('express-session');
const passport = require('passport');
const { Users } = require('./models/userModel');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
require('../server/controllers/googleOAuth');

// Env config for Google OAuth
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


function isLoggedIn(req, res, next) {
  return req.user ? next() : res.sendStatus(401);
}

app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// app.get('/', (req, res) => {
//   return res.send('<a href="/auth/google"> Authenticate with Google </a>');
// });

app.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/',
    failureRedirect: '/auth/google/failure'
  })
);

app.get('/', isLoggedIn, (req, res) => {
  return res.status(200).send({username: req.user.displayName, success:true});
});

// Handle the user registration logic and user creation middleware functionality.
app.post('/register', userController.createUser, (req, res) => {
  return res.status(200).json({username: res.locals.user});
});



// Handle user login to validate and verify the input data.
app.post('/login', userController.verifyUser, (req, res) => {
  
  // // validationResult Extracts the validation errors from a request and makes them available in a Result object.
  // const errors = validationResult(req);
	
  // // isEmpty Returns a boolean indicating whether this result object contains no errors at all.
  // if (!errors.isEmpty()) {
  //   return res.status(422).json({ errors: errors.array() });
	// }
  return res.status(200).json({username: res.locals.user});
});

app.get('/templates/:username', userController.getTemplates, (req, res) => {
  return res.status(200).json(res.locals.user);
});

app.post('/templates', userController.addTemplate, (req, res) => {
  return res.status(200).json(res.locals.updated);
});


// app.get('/templates/:username', userController.getTemplates, (req, res) => {
//   return res.status(200).json(res.locals.user);
// });



// Handle all remaining endpoints that are not captured in the server/routers.
app.use('*', (req,res) => {
  return res.status(404).json('Not Found');
});

// Global error handler for all middleware functions.
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`This app is listening on port ${PORT}`));

