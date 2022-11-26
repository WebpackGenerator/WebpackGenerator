const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_URI = `mongodb+srv://webpackmystack:${process.env.PASSWORD}@cluster0.ivrgrpq.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'wpms'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

// sets a schema for the 'users' collection
const usersSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  templates: { type: Object },
});


const Users = mongoose.model('users', usersSchema);


module.exports = {
  Users,
};
