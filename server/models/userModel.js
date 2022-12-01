const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

require("dotenv").config();

// ${process.env.PASSWORD}


mongoose
  .connect(global.__MONGO_URI_PROD__, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: "w",
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log(err));
// }

const Schema = mongoose.Schema;

// sets a schema for the 'users' collection
const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  //template: { type: mongoose.SchemaTypes.Mixed, required: false }
});

const Users = mongoose.model("users", userSchema);

module.exports = Users;
