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
    res.locals.user = user;
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
    if (user === null) return next({err: "Wrong email or password"});
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return next({
          log: "userController.validatePassword",
          status: 500,
          message: { err: "Incorrect username or password" },
        });
      }
    })
    res.locals.user = user;
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


module.exports = userController;
