import React from 'react';
import classes from './Profile.module.css';

import MyPostsContainer from './myPosts/myPostsContainer';
import ProfileInfo from './profileInfo/profileInfo';

const Profile = (props) => {


   return (

      <div className={classes.Profile}>

         <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />

         <div>Content #1</div>
         <MyPostsContainer
         // store={props.store}
         />

      </div>
   )
}

export default Profile;