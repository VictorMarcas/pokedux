import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/rootReducers';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { logger } from './middleware';
import thunk from 'redux-thunk';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = composeAlt(applyMiddleware(thunk, logger))
const store = createStore(rootReducer, composeEnhancers);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);