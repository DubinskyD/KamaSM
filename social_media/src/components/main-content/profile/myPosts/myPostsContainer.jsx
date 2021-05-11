// import React from 'react';
import MyPosts from './myPosts';
import { connect } from "react-redux";
import { addPostActionCreator } from '../../../../redux/reducers/profileReducer';


// const MyPostsContainer = (props) => {

//    let state = props.store.getState();

//    let addPost = () => {
//       props.store.dispatch(addPostActionCreator());
//    }

//    let onPostChange = (newText) => {
//       props.store.dispatch(updateNewPostTextActionCreator(newText));
//    };

//    return (
//       <MyPosts
//          updateNewPostText={onPostChange}
//          addPost={addPost}

//          PostMessage={state.profilePage.PostMessage}
//          newPostText={state.profilePage.newPostText}
//       />
//    );
// }

let mapStateToProps = (state) => {
   return {
      PostMessage: state.profilePage.PostMessage,
      newPostText: state.profilePage.newPostText
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      addPost: (newPostText) => {
         dispatch(addPostActionCreator(newPostText))
      },

   }

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;