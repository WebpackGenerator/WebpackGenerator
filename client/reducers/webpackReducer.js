import * as types from '../actions/actionTypes';

const initialState = {
  user: '',
  template: {
    miniCssExtractPlugin: false,
    htmlWebpackPlugin: false,
    htmlpluginTitle: 'Development',
    htmlpluginTemplate: 'index.html',
    prettier: false,
    eslint: false,
    entry: './src/index.js',
    output_filename: 'bundle.js',
    output_folder: 'dist',
    react: false,
    css: '',
    typescript: false,
    devServer: false,
    proxyPort: 8080,
    static: false,
    proxy_filepath: '/',
    proxy_target: '3000',
    static_folder: 'build',
    static_path: './build',
    proxy: false,
  },
  projectName: 'MyProject',
  webpack: 'boilerplate webpack stuff!',
  npm: ''
};

const webpackReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_FORM:
      // copy existing template
      const template = { ...state.template };

      // update with new value
      for (const k in action.payload) {
        template[k] = action.payload[k];
      }

      // return updated state
      return {
        ...state,
        template: template,
      };

    case types.PUT_WEBPACK_IN_STATE:
      return {
        ...state,
        webpack: action.payload
      };
    
    case types.PUT_NPM_IN_STATE:
    return {
      ...state,
      npm: action.payload
    };

    // case types.PUT_USER_IN_STATE:
    // return {
    //   ...state,
    //   user: action.payload
    // };
 
    default: {
      return state;
    }
  }
};

export default webpackReducer;
