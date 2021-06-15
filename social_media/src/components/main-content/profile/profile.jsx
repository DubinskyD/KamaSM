import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './myPosts/myPostsContainer';
import ProfileInfo from './profileInfo/profileInfo';

const Profile = (props) => {
   return (
      <div className={classes.Profile}>
         <ProfileInfo isOwner={props.isOwner}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            saveAvatar={props.saveAvatar} />
         <div>Content #1</div>
         <MyPostsContainer />
      </div>
   )
}

export default Profile;