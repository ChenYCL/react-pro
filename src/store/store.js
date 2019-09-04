import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {
    User,
    Home,
    About,
    Menu
} from './index'
import thunk from "redux-thunk";
import {logger} from 'redux-logger'

// 作用于全局的state 模块。 可以使用 import * as reducers from './index' ,之后接构 ...reducers 但结构不清晰
const rootReducer = combineReducers({
    User,
    Home,
    About,
    Menu
    // ...
})

const middlewares = [thunk];
let store = null;
if (process.env.NODE_ENV === `development`) {
    middlewares.push(logger);
} else {
}

if (process.env.NODE_ENV === `development`) {
    store = compose(composeWithDevTools(applyMiddleware(...middlewares)))(createStore)(rootReducer);
} else {
    // production env
    store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer); // remove devtools && logger
}

export default store;