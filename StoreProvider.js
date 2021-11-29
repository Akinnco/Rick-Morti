import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import store from './src/@redux/store';

const StoreProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default StoreProvider;
