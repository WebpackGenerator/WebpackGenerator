const { Users } = require('../models/userModel');

const userController = {};


userController.createUser = async (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body 
  console.log(email, password)
  try {
    const user = await Users.create({
        email: email.toString(),
        password: password.toString(),
    })
    res.locals.user = user;
    console.log('user', user)
    return next();
  }
  catch(e) {
    console.log('userController.createUser: caught error');
    console.log(e);
    next({err: "Please enter a valid email and password"});
  }
};



userController.verifyUser = (req, res, next) => {
  const { email, password } = req.body
  Users.findOne({
    email: email,
    password: password
  }, (err, user) => {
    if (user === null) {
      return next({err: "Wrong email or password"})
    }
    else {
      console.log(user)
      res.locals.user = user;
      return next();
    } 
  })
};




// dependencies

module.exports = userController;
