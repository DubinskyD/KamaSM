import profileReducer from './reducers/profileReducer';
import messageReducer from './reducers/messageReducer';
import feedReducer from './reducers/feedReducer';



let store = {
   _state: {

      profilePage: {
         PostMessage: [
            { id: 1, Message: 'hi' },
            { id: 2, Message: 'someText' },
            { id: 3, Message: 'yo' }
         ],
         newPostText: '',
      },
      messagesPage: {
         dialogsParticipantsList: [
            { id: 1, name: 'Dmitriy' },
            { id: 2, name: 'Yuna' },
            { id: 3, name: 'Andrey' },
            { id: 4, name: 'Vasia' }
         ],
         dialogItemsText: [
            { id: 1, dialogtext: 'hi' },
            { id: 2, dialogtext: 'test' },
            { id: 3, dialogtext: '123' },
         ],
         newMessageText: '',
      },
      feedPage: {

      },

   },
   _callSubscriber() {
      console.log('state chenged');
   },

   subscribe(observer) {
      this._callSubscriber = observer;
   },
   getState() {
      return this._state;
   },

   dispatch(action) {

      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.messagesPage = messageReducer(this._state.messagesPage, action);
      this._state.feedPage = feedReducer(this._state.feedPage, action);

      this._callSubscriber(this._state);

   },

}




export default store;
window.store = store;