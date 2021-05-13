import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import profileReducer from './reducers/profileReducer';
import messageReducer from './reducers/messageReducer';
import feedReducer from './reducers/feedReducer';
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/auth-reducer";

import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from "./reducers/app-reducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

let reducers = combineReducers({
   profilePage: profileReducer,
   messagesPage: messageReducer,
   feedPage: feedReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
});

let store = createStore(
   reducers,
   composeEnhancers(applyMiddleware(thunkMiddleware))

);

window.store = store;

export default store;