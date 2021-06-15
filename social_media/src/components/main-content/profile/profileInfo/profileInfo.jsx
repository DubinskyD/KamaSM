import React from 'react';
import Preloader from '../../../common/preloader';
import ProfileStatusH from './ProfileStatusH';
import userPhoto from '../../../../../src/assets/image/user-image.jpg';

let ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader />
   }
   const onAvatarSelected = (e) => {

      if (e.target.files.length) {
         console.log(e.target.files.length)
         props.saveAvatar(e.target.files[0]);
      }
   }

   return (
      <div>
         <img src={props.profile.photos.large || userPhoto} alt="#" />
         {props.isOwner && <input type="file" onChange={onAvatarSelected} />}
         <ProfileStatusH status={props.status} updateStatus={props.updateStatus} />
      </div>
   )

}

export default ProfileInfo;