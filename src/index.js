import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reducer as form} from 'redux-form';
import {Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {ConnectedRouter, connectRouter, routerMiddleware} from 'connected-react-router';
import App from "./App";

const history = createBrowserHistory();
const store = createStore(
    combineReducers({
        router: connectRouter(history),
        form
    }),
    applyMiddleware(routerMiddleware(history), thunk)
);


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={App} exact key="home"/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
