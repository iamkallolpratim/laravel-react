import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, history } from './redux/store';
import Routes from './router'
import './App.css';


ReactDOM.render(
    <Provider store={store}>
        <Routes history={history} />
    </Provider>,
    document.getElementById('root')
)

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept();
}
