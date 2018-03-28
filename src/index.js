import React from 'react';
import {render} from 'react-dom';
import AppCoffe from './components/AppCoffe'
import './css/main.css'
import data from './data.json'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'
import App from './App'

const initialState = data;

const store = createStore(reducers,initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 

render(
    <Provider store={store}>
        <App />
   </Provider>
     , document.getElementById('root') )
