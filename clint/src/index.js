import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'
import App from './App';
import './index.scss'
import userReducer from './redux/auth'
import cartReducer from './redux/productCart';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

