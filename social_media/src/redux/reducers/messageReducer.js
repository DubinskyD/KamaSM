const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
   ]
}

const messageReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_MESSAGE:
         return {
            ...state,
            dialogItemsText: [...state.dialogItemsText, { id: 4, dialogtext: action.newMessageText }]
         };

      default:
         return state;
   }
}
export const addMesssageActionCreator = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText })

export default messageReducer;