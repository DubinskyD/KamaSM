import profileReducer, { addPostActionCreator } from "./profileReducer";
import { render, screen } from '@testing-library/react';




test('new post should be added', () => {
   let action = addPostActionCreator("test post text");

   let State = {
      PostMessage: [
         { id: 1, Message: 'hi' },
         { id: 2, Message: 'someText' },
         { id: 3, Message: 'yo' }
      ]
   };

   let newState = profileReducer(State, action);
   expect(newState.PostMessage.length).toBe(4);
   expect(newState.PostMessage[3].Message).toBe("test post text");
});



