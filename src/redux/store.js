import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import authReducer from "./reducers/authReducer";
import blogsReducer from "./reducers/blogsReducer";

const reducers = combineReducers({
    auth: authReducer,
    blogs: blogsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;