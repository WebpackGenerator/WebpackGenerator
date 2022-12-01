const { Users } = require('../models/userModel');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const userController = {};

// Create a new user based on user inputs and save the user to the database.
userController.createUser = async (req, res, next) => {

  try{
    const { email, password } = req.body;
    const hashedPass = await bcrypt.hash(password, SALT_WORK_FACTOR)
    console.log(hashedPass);
    const user = await Users.create({
        email: email,
        password: hashedPass,
    })
    res.locals.user = user.email;
    return next();
  }
  
  catch(err) {
    console.log('userController.createUser: caught error');
    next(
      {log: `issue in userController.createUser: ${err}`,
        status: 400,
        message: { err: 'An error occurred in userController.createUser' }
      }
    );
  }
};

// Verify the provided login information by the user with the database.
userController.verifyUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({
      email: email,
      // password: password
    });
    if (user === null) return next({
      log: 'Express error handler caught in UsersController.verifyUser middleware error',
      status: 400,
      message: { err: 'Wrong Username or Password' },
    });
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return next({
          log: "userController.validatePassword",
          status: 500,
          message: { err: "Incorrect username or password" },
        });
      }
    })
    res.locals.user = user.email;
    return next();
  } 
  catch(err) {
    console.log('userController.verifyUser: caught error');
    next(
      {log: `issue in userController.verifyUser: ${err}`,
        status: 400,
        message: { err: 'An error occurred in userController.verifyUser' }
      }
    );
  }
};

// PersonModel.update(
//   { _id: person._id }, 
//   { $push: { friends: friend } },
//   done
// );


userController.addTemplate = async (req,res,next) => {
  try {
    const {username, title, template, npmCommand} = req.body;
    const obj = {title, template, npmCommand};
    const updated = await Users.findOneAndUpdate( {email: username}, {$push: {template: obj}} )
    res.locals.updated = updated;
    console.log(updated);
    return next();
  } catch (error) {
    return next(error);
  }
}

userController.getTemplates = async (req, res, next) => {
  try {
    const {username} = req.params
    console.log(username)
    const user = await Users.findOne({
      email: username,
      // password: password
    });
    console.log(user);
    res.locals.user = user
    return next();
  } catch (error) {
    return next(error);
  }
}

module.exports = userController;
