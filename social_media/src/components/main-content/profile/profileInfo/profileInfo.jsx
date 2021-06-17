import React, { useState } from 'react';
import Preloader from '../../../common/preloader';
import ProfileStatusH from './ProfileStatusH';
import userPhoto from '../../../../../src/assets/image/user-image.jpg';
import ProfileInfoContentForm from './ProfileInfoContentForm';

let ProfileInfo = ({ saveAvatar, profile, isOwner, status, updateStatus, saveProfile }) => {
   let [editMode, setEditMode] = useState(false);
   const activateEditMode = () => {
      setEditMode(true);
   }
   const onFormSubmit = (formData) => {
      saveProfile(formData).then(
         () => {
            setEditMode(false);
         }
      );
   }
   if (!profile) {
      return <Preloader />
   }
   const onAvatarSelected = (e) => {
      if (e.target.files.length) {
         saveAvatar(e.target.files[0]);
      }
   }
   return (
      <div>
         <img src={profile.photos.large || userPhoto} alt="#" />
         {isOwner && <input type="file" onChange={onAvatarSelected} />}
         {editMode
            ? <ProfileInfoContentForm initialValues={profile} profile={profile} onSubmit={onFormSubmit} />
            : <ProfileInfoContent profile={profile} isOwner={isOwner} activateEditMode={activateEditMode} />
         }
         <ProfileStatusH status={status} updateStatus={updateStatus} />
      </div>
   )

}

const ProfileInfoContent = ({ profile, isOwner, activateEditMode }) => {
   return <div>
      {isOwner && <div><button onClick={activateEditMode}>Edit</button> </div>}
      <div>
         <p>Full name: {profile.fullName} </p>
      </div>
      <div>
         <p>About me: {profile.aboutMe}</p>
      </div>
      <div>
         <p>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</p>
      </div>
      <div>
         <p>Position description: {profile.lookingForAJobDescription}</p>
      </div>
      <div>
         <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <ContactsInfo key={key} contactTitle={key} contactValue={profile.contacts[key]} />
         })}
      </div>
   </div >
}

const ContactsInfo = ({ contactTitle, contactValue }) => {
   return <div>
      <b>{contactTitle}</b>:{contactValue}
   </div>
}
export default ProfileInfo;