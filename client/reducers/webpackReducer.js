import * as types from '../actions/actionTypes';

const initialState = {
  template: {
    htmlWebpackPlugin: false,
    entry: './src/index.js',
    output_filename: 'bundle.js',
    output_folder: 'dist',
    react: false,
    css: '',
    typescript: false,
    proxy: false,
    proxyPort: 8080
  }
};

const webpackReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_FORM:

      // copy existing template
      const template = {...state.template};

      // update with new value
      for (const k in action.payload) {
        template[k] = action.payload[k];
      }

      // return updated state
      return {
        ...state,
        template: template
      };
 
    default: {
      return state;
    }
  }
};

export default webpackReducer;
