// react
import React from 'react';
import { render } from 'react-dom';

// redux
import { Provider } from 'react-redux';
import store from './store';

// componenet
import App from './components/App';

// style
import styles from './scss/app.scss';


render(
    <Provider store={store}>
      <App />
    </ Provider>,
  // wrap the App in the Provider Component and pass in the store
  document.getElementById('root')
);