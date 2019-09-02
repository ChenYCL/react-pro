import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import thunk from "redux-thunk";
import {logger} from 'redux-logger'

const rootReducer = combineReducers({
    user,
    // ...
})

const middlewares = [thunk];
let  store = null;
if (process.env.NODE_ENV === `development`) {
    middlewares.push(logger);
} else {}

if(process.env.NODE_ENV === `development`){
    store = compose(composeWithDevTools(applyMiddleware(...middlewares)))(createStore)(rootReducer);
}else {
    // production env
    store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer); // remove devtools && logger
}

export default store;