import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from './reducer';


const history = createHistory();
const routeMiddleware = routerMiddleware(history);
const middleWares = [thunk, routeMiddleware];
const composeEnhancers =  compose;

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  composeEnhancers(
    applyMiddleware(...middleWares),
  )
);
export { store, history };
