import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createBrowserHistory} from "history";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {BrowserRouter, Router, Route, Switch} from 'react-router';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';
import {createStore, applyMiddleware} from 'redux'
var hist = createBrowserHistory();

const store = createStore(
    reducers,
    applyMiddleware(thunk,promiseMiddleware())
)

ReactDOM.render(
    <App />, 
    document.getElementById('root')
    );

registerServiceWorker();
