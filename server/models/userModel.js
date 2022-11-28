const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

require('dotenv').config();
// ${process.env.PASSWORD}
const MONGO_URI = 'mongodb+srv://webpackmystack:lipfish@cluster0.mqfyalr.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'w'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

// sets a schema for the 'users' collection
const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  //template: { type: mongoose.SchemaTypes.Mixed, required: false }
});


//userSchema.plugin(passportLocalMongoose);

const Users = mongoose.model('users', userSchema);

//module.exports = mongoose.model('userData', usersSchema, 'userData');


module.exports = { Users };
