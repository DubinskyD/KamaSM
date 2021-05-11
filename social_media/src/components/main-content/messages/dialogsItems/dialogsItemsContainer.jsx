// import React from 'react';
import DialogsItems from './dialogsItems';
import { connect } from "react-redux";
import { addMesssageActionCreator } from '../../../../redux/reducers/messageReducer';

import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';
import { compose } from 'redux';

// const DialogsItemsContainer = (props) => {
//    let state = props.store.getState();

//    let addMessage = () => {
//       props.store.dispatch(addMesssageActionCreator())
//    }

//    let onMessageChange = (newMessage) => {
//       props.store.dispatch(updateNewMessageTextActionCreator(newMessage));
//    }

//    return (
//       <DialogsItems
//          updateNewMessageText={onMessageChange}
//          addMessage={addMessage}

//          dialogItemsText={state.messagesPage.dialogItemsText}
//          newMessageText={state.messagesPage.newMessageText}
//       />

//    );
// }

let mapStateToProps = (state) => {
   return {
      newMessageText: state.messagesPage.newMessageText,  //wil be rerender when <-  obj(newMessageText) changed. It's connect function
      dialogItemsText: state.messagesPage.dialogItemsText,

   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      addMessage: (newMessageText) => {
         dispatch(addMesssageActionCreator(newMessageText));
      }
   }
}

export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
)(DialogsItems);

