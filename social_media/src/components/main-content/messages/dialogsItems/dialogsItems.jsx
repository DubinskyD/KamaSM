import React from 'react';
import { Field, reduxForm } from 'redux-form';
import DialogsItem from './dialogsItem/dialogsItem';
// import classes from './DialogsItem.module.css';

const DialogsItems = (props) => {

   let DialogMessageData = props.dialogItemsText
      .map(postMessage => <DialogsItem dialogtext={postMessage.dialogtext} id={postMessage.id} />)

   let addNewMessage = (values) => {
      props.addMessage(values.newMessageText);
   }

   return (
      <div>
         <div>Messages</div>
         {DialogMessageData}
         <DialogsItemsReduxForm onSubmit={addNewMessage} />
      </div>
   )
}

const DialogsItemsForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component="textarea" name="newMessageText" />
         </div>
         <div>
            <button> Add message</button>
         </div>
      </form>
   )
}
const DialogsItemsReduxForm = reduxForm({ form: "dialogItems" })(DialogsItemsForm);

export default DialogsItems;