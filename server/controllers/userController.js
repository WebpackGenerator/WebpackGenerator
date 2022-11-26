const { Users } = require('../models/userModel');

const userController = {};


userController.createUser = async (req, res, next) => {
  const { email, password } = req.body 
  console.log(email, password)
  try {
    const user = await Users.create({
        email: email,
        password: password,
    })
    if (user === null) {
      console.log('userController.createUser caught error while creating new user');
    }
    res.locals.user = user;
    console.log('user', user)
    return next();
  }
  catch(e) {
    console.log(e);
    res.send('not working');
  }
  
  //return next();
};



userController.verifyUser = (req, res, next) => {
  const { email, password } = req.body
  Users.findOne({
    email: email,
    password: password
  }, (err, user) => {
    if (err) console.log(err);
    else if (user === null) res.redirect('/register')
    else {
      console.log(user)
      res.locals.user = user;
      return next();
    } 
  })
};




// dependencies

module.exports = userController;
