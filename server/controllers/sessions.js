const session = require('express-session');  
const { v4: uuidv4 } = require('uuid'); 

const sessionController = {}


sessionController.getSessionId = async (req,res,next) => {
  
  try {
    session({
      genid: function (req) {
      return uuidv4();
      },
      secret: '=fmLV*U@FL`N]]~/zqtFCch.pBTGoU',
      resave: false,
      saveUninitialized: true,
    })
    return next();
  }

  catch(err) {
    console.log('sessionController.getSessionIdt: caught error');
    next(
      {log: `issue in sessionController.getSessionIdt: ${err}`,
        status: 400,
        message: { err: 'An error occurred in sessionController.getSessionId' }
      }
    );
  }
}


module.exports = sessionController;