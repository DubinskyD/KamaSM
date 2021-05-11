
// let store = {
//    _state: {
//       mainContent: {
//          profilePage: {
//             PostMessage: [
//                { id: 1, Message: 'hi' },
//                { id: 2, Message: 'someText' },
//                { id: 3, Message: 'yo' }
//             ],
//             newPostText: '',
//          },
//          messagesPage: {
//             dialogsParticipantsList: [
//                { id: 1, name: 'Dmitriy' },
//                { id: 2, name: 'Yuna' },
//                { id: 3, name: 'Andrey' },
//                { id: 4, name: 'Vasia' }
//             ],
//          }
//       },
//    },
//    getState() {
//       return this._state;
//    },

//    rerenderEntireTree() {
//       console.log('state chenged');
//    },
//    addPost() {

//       let newPost = {
//          id: 4,
//          Message: this._state.mainContent.profilePage.newPostText
//       };
//       this._state.mainContent.profilePage.PostMessage.push(newPost);
//       this._state.mainContent.profilePage.newPostText = '';
//       rerenderEntireTree(this.state);
//    },
//    updateNewPostText(newText) {
//       this._state.mainContent.profilePage.newPostText = newText;
//       rerenderEntireTree(this._state);
//    },
//    subscribe(observer) {
//       rerenderEntireTree = observer;
//    }
// }

// export default store;
// window.store = store;