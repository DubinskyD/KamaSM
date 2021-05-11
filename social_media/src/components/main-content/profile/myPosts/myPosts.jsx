import React from 'react';
import MyPost from './myPost/myPost.jsx';
import { Field, reduxForm } from 'redux-form';
// import classes from './MyPosts.module.css';

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
            <Field component="textarea" name="newPostText" />
         </div>
         <div>
            <button> Add Post</button>
         </div>
      </form>
   )
}

const MyPostsReduxForm = reduxForm({ form: 'myPosts' })(MyPostsForm)

export default MyPosts;