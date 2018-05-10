import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

export default function (configurations) {
    // console.log(rootReducer);
    console.log(configurations.reducers);
    const reducer = combineReducers(configurations.reducers);
    let store;
    const enhancer = applyMiddleware(thunkMiddleware);
    if (process.env.NODE_ENV === 'development'
        && window.__REDUX_DEVTOOLS_EXTENSION__
        && window.__REDUX_DEVTOOLS_EXTENSION__()) {
        const reduxDevtool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); // Chrome Extension Redux Devtools
        store = createStore(reducer, compose(enhancer, reduxDevtool));
    } else {
        store = createStore(reducer, enhancer);
    }
    return store;
}
