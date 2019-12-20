import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga/index'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware, logger)
    );
}