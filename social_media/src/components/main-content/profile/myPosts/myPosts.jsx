import React from 'react';
import MyPost from './myPost/myPost.jsx';
import { Textarea } from '../../../common/FormsControls/FormsControls';
import { Field, reduxForm } from 'redux-form';
import { required, maxLenthCreator } from "../../../../utils/validators/validators";
// import classes from './MyPosts.module.css';

const maxLength10 = maxLenthCreator(10);

const MyPosts = (props) => {
   let PostMessageData = props.PostMessage
      .map(postText => <MyPost Message={postText.Message} id={postText.id} />)

   const addNewPost = (values) => {
      props.addPost(values.newPostText);
   }
   return (
      <div>
         MyPosts:
         {PostMessageData}
         <MyPostsReduxForm onSubmit={addNewPost} />
      </div>
   )
}

const MyPostsForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component={Textarea} name="newPostText"
               validate={[required, maxLength10]} placeholder={"Post message"}
            />
         </div>
         <div>
            <button> Add Post</button>
         </div>
      </form>
   )
}

const MyPostsReduxForm = reduxForm({ form: 'myPosts' })(MyPostsForm)

export default MyPosts;