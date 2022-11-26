import * as types from '../actions/actionTypes';

const initialState = {
  htmlWebpackPlugin: false,
  entry: './src/index.js',
  output_filename: 'bundle.js',
  output_folder: 'dist',
  react: true,
  css: false,
  scss: false,
  typescript: false,
  proxy: false,
  proxyPort: 8080
};

const webpackReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_FORM:

      const settings = {
        htmlWebpackPlugin,
        entry,
        output_filename,
        output_folder,
        react,
        css,
        scss,
        typescript,
        proxy,
        proxyPort
      };

      // return updated state
      return {
        ...state,
        settings
      };
 
    default: {
      return state;
    }
  }
};

export default webpackReducer;
