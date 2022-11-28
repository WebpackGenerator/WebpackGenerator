// import actionType constants
import * as types from './actionTypes';

export const updateOptionsActionCreator = options => {
  console.log('action made', options);
  return ({
    type: types.UPDATE_FORM,
    payload: options,
  })
};

