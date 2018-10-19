import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import placesReducer from './reducers/places';
import uiReducer from './reducers/ui';

import watchImages from './sagas';

const rootReducer = combineReducers({
  places: placesReducer,
  ui: uiReducer
});

const sagaMiddleware = createSagaMiddleware();

let composeEnhancers = compose;

if (__DEV__) composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchImages);

export default store;
