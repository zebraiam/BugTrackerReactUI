import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {configureStore, combineReducers} from '@reduxjs/toolkit'

//Reducers
import authReducer from './Controllers/Redux/authSlice'
import bugReducer from './Controllers/Redux/bugSlice'
import userReducer from './Controllers/Redux/bugSlice'


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

//Redux Configure
const reducer = combineReducers({
  auth:authReducer,
  bug:bugReducer, 
  user:userReducer,
})

const store = configureStore({

  reducer
})

root.render(
 
  <Provider store = {store}>

    <App />
    </Provider>
    ,

 // document.getElementById('root')
);

