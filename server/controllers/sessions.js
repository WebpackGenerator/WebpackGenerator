const session = require('express-session');  
const { v4: uuidv4 } = require('uuid'); 

const sessionController = {}


sessionController.getSessionId = (req,res,next) => {
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


module.exports = sessionController;