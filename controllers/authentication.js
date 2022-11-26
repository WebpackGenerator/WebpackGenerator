const authController = {}

authController.validate = (req,res,next) => {
  check('username', 'Username Must Be an Email Address').isEmail(),
  check('password').isLength({ min: 8 })
  .withMessage('Password Must Be at Least 8 Characters')
  .matches('[0-9]').withMessage('Password Must Contain a Number')
  .matches('[A-Z]').withMessage('Password Must Contain an Uppercase Letter')
  return next()
}



module.exports = authController;