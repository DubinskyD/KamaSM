import React from 'react';
import Preloader from '../../../common/preloader';
import ProfileStatusH from './ProfileStatusH';

let ProfileInfo = (props) => {

   if (!props.profile) {
      return <Preloader />
   }


   return (
      <div>
         <img src={props.profile.photos.large} alt="#" />
         <ProfileStatusH status={props.status} updateStatus={props.updateStatus} />
      </div>
   )

}

export default ProfileInfo;