import { profileAPI, usersAPI } from "../../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'

let initialState = {
   PostMessage: [
      { id: 1, Message: 'hi' },
      { id: 2, Message: 'someText' },
      { id: 3, Message: 'yo' }
   ],

   profile: null,
   status: ''
}


const profileReducer = (state = initialState, action) => {

   switch (action.type) {

      case ADD_POST:
         return {
            ...state,
            PostMessage: [...state.PostMessage, { id: 4, Message: action.newPostText }],

         };

      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.profile
         };
      case SET_STATUS:
         return {
            ...state,
            status: action.status
         };

      default:
         return state;
   }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })


export const getUserProfile = (userId) => {
   return (dispatch) => {
      usersAPI.getProfile(userId)

         .then(response => {
            dispatch(setUserProfile(response.data));
         });
   }
}

export const getStatus = (userId) => {
   return (dispatch) => {
      profileAPI.getStatus(userId)
         .then(response => {
            dispatch(setStatus(response.data));
         });
   }
}

export const updateStatus = (status) => {
   return (dispatch) => {
      profileAPI.updateStatus(status)
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(setStatus(status));
            }
         });
   }
}

export default profileReducer;