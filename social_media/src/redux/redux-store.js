import { combineReducers, createStore, applyMiddleware } from "redux";

import profileReducer from './reducers/profileReducer';
import messageReducer from './reducers/messageReducer';
import feedReducer from './reducers/feedReducer';
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/auth-reducer";

import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
   profilePage: profileReducer,
   messagesPage: messageReducer,
   feedPage: feedReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;