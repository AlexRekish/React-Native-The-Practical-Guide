import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';

import store from './src/store/store';
import App from './App';

/* eslint-disable */
const ReduxWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
/* eslint-enable */
AppRegistry.registerComponent('cleanRncgmax1018', () => ReduxWrapper);
