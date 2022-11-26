// import actionType constants
import * as types from './actionTypes';

export const updateOptionsActionCreator = options => ({
  type: types.ADD_CARD,
  payload: options,
});

