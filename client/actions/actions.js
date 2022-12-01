// import actionType constants
import * as types from './actionTypes';

export const updateOptionsActionCreator = options => {
  return ({
    type: types.UPDATE_FORM,
    payload: options,
  })
};

export const saveWebpackCodeActionCreator = webpackString => {
  return ({
    type: types.PUT_WEBPACK_IN_STATE,
    payload: webpackString,
  })
};

export const saveNpmCodeActionCreator = npmString => {
  return ({
    type: types.PUT_NPM_IN_STATE,
    payload: npmString,
  })
};

// export const saveUserCodeActionCreator = username => {
//   return ({
//     type: types.PUT_USER_IN_STATE,
//     payload: username,
//   })
// };