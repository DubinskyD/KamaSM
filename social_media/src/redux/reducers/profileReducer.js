import { stopSubmit } from "redux-form";
import { profileAPI, usersAPI } from "../../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_AVATAR_SUCCESS = 'SAVE_AVATAR_SUCCESS';

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
      case SAVE_AVATAR_SUCCESS:
         debugger;
         return {
            ...state,
            profile: { ...state.profile, photos: action.avatar }
         };
      default:
         return state;
   }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const saveAvatarSuccess = (avatar) => ({ type: SAVE_AVATAR_SUCCESS, avatar })
export const getUserProfile = (userId) => {
   return async (dispatch) => {
      const response = await usersAPI.getProfile(userId);
      dispatch(setUserProfile(response.data));
   }
}

export const getStatus = (userId) => {
   return async (dispatch) => {
      const response = await profileAPI.getStatus(userId);
      dispatch(setStatus(response.data));
   }
}

export const updateStatus = (status) => {
   return async (dispatch) => {
      const response = await profileAPI.updateStatus(status);
      if (response.data.resultCode === 0) {
         dispatch(setStatus(status));
      }
   }
}
export const saveAvatar = (file) => {
   return async (dispatch) => {
      const response = await profileAPI.saveAvatar(file);
      if (response.data.resultCode === 0) {
         dispatch(saveAvatarSuccess(response.data.data.photos));
      }
   }
}
export const saveProfile = (profile) => {
   return async (dispatch, getState) => {
      const userId = getState().auth.userId;
      const response = await profileAPI.saveProfile(profile);
      if (response.data.resultCode === 0) {
         dispatch(getUserProfile(userId));
      } else {
         dispatch(stopSubmit("EditProfileContent", { _error: response.data.messages[0] }))
         return Promise.reject(response.data.messages[0]);
      }
   }
}


export default profileReducer;