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


//ENV
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}


app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('<a href="/auth/google"> Authenticate with Google </a>');
});

app.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/google/failure'
  })
);

app.get('/protected', isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});

  
    
// app.get('/logout', (req, res) => {
//   req.logout();
//   req.session.destroy();
//   res.send('Goodbye!');
// });



// send static stuff
// app.get('/', (req, res) => {
  //   console.log(__dirname);
  //   res.sendFile(path.join(__dirname, '../index.html'));
// });

// app.use(sessionController.getSessionId);
// passport.use(Users.createStrategy());

app.post('/register', authController.validate, userController.createUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

//  authController.validate, 

app.post('/login', authController.validate, userController.verifyUser, (req, res) => {
  const errors = validationResult(req);
	if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
	}
	else {
    let username = req.body.email;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
	}
});


// catchall

// global errors 


app.listen(PORT, () => console.log(`This app is listening on port ${PORT}`));

