import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import {signup} from './signup'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({  
            signup
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}