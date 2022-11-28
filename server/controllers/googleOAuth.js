const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const {Users} = require('../models/userModel');


const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback",
  passReqToCallback: true,
},

function(request, accessToken, refreshToken, profile, done) {
//  new Users({
//   username: profile.email,
//   password: "  "
//  }).save().then((newUser) => console.log(newUser));
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

