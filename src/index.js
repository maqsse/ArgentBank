import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './reducers'
import App from './App';
import './index.css';
import { login } from './actions/auth.Actions';

const store = configureStore({
  reducer: rootReducer,
  devTools: true, 
    });

    store.dispatch(login())


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)


