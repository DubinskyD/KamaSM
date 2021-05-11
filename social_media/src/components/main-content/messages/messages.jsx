import React from 'react';
import classes from './Messages.module.css';
// import Dialogs from './dialogs/dialogs.jsx';
// import DialogsItems from './dialogsItems/dialogsItems.jsx';
import DialogsItemsContainer from './dialogsItems/dialogsItemsContainer';

const Messages = (props) => {
   return (
      <div className={classes.Messages}>
         {/* <Dialogs dialogsParticipantsList={props.messagesPage.dialogsParticipantsList} /> */}
         <DialogsItemsContainer
            store={props.store} />
      </div>

   )
}

export default Messages;