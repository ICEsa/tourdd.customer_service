import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'

import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';
import {createStore, applyMiddleware} from 'redux'

import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(
    reducers,
    applyMiddleware(thunk,promiseMiddleware())
)

ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
    );

registerServiceWorker();
