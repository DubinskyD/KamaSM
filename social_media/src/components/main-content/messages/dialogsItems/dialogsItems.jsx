import React from 'react';
import { Textarea } from '../../../common/FormsControls/FormsControls';
import { Field, reduxForm } from 'redux-form';
import DialogsItem from './dialogsItem/dialogsItem';
import { maxLenthCreator, required } from '../../../../utils/validators/validators';
// import classes from './DialogsItem.module.css';

const DialogsItems = (props) => {

   let DialogMessageData = props.dialogItemsText
      .map(postMessage => <DialogsItem key={postMessage.id} dialogtext={postMessage.dialogtext} id={postMessage.id} />)

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

const maxLenth50 = maxLenthCreator(50);

const DialogsItemsForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component={Textarea}
               validate={[required, maxLenth50]}
               name="newMessageText" />
         </div>
         <div>
            <button> Add message </button>
         </div>
      </form>
   )
}
const DialogsItemsReduxForm = reduxForm({ form: "dialogItems" })(DialogsItemsForm);

export default DialogsItems;