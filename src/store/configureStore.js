import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga'

const sagaMiddleware = createSagaMiddleware()

const enhancer = applyMiddleware(sagaMiddleware, logger)

const store = createStore(rootReducer, enhancer)
window.store = store;
sagaMiddleware.run(rootSaga);
export default store
