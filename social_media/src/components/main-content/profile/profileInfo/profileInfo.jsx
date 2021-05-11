import React from 'react';
import Preloader from '../../../common/preloader';
import ProfileStatus from './ProfileStatus';

let ProfileInfo = (props) => {

   if (!props.profile) {
      return <Preloader />
   }


   return (
      <div>
         <img src={props.profile.photos.large} alt="#" />
         <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
   )

}

export default ProfileInfo;