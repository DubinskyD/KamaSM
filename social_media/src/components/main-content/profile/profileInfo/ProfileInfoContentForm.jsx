import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../../common/FormsControls/FormsControls';

const ProfileInfoContentForm = ({ handleSubmit, profile, error }) => {
   return (
      <form onSubmit={handleSubmit}>
         <button >Save</button>
         {error && <div>{error}</div>}
         <div>
            Full name: {createField("Full name", "fullName", [], Input)}
         </div>
         <div>
            About me: {createField("About me", "aboutMe", [], Textarea)}
         </div>
         <div>
            Looking for a job: {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
         </div>
         <div>
            description: {createField("Position description", "lookingForAJobDescription", [], Textarea)}
         </div>
         <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
               return <div key={key}>
                  <b>{key}: {createField(key, "contacts." + key, [], Input)} </b>
               </div>
            })}
         </div>
      </form>
   )
}

const ProfileInfoContentFormReduxForm = reduxForm({ form: 'EditProfileContent' })(ProfileInfoContentForm)
export default ProfileInfoContentFormReduxForm;