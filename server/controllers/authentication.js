const {check, isLength, matches, withMessage, isEmail} = require('express-validator');

const authController = {};

// Validate and sanitize the user input data for signup.
authController.validate = async (req, res, next) => {
  
  try {
    [check('email').isEmail().withMessage('Please enter a valid email'),
    check('password').isLength({ min: 6 })
    .withMessage('your password must be at least 6 characters')
    .matches(/\d/)
    .withMessage("your password should have at least one number")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("your password should have at least one sepcial character")]
      // validationResult Extracts the validation errors from a request and makes them available in a Result object.
  const errors = validationResult(req);
	
  // isEmpty Returns a boolean indicating whether this result object contains no errors at all.
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
	}
    return next()
  }
  
  catch(err) {
    console.log('authController.validate: caught error');
    next(
      {log: `issue in authController.validate: ${err}`,
        status: 400,
        message: { err: 'An error occurred in authController.validate' }
      }
    );
  }
}

module.exports = authController;