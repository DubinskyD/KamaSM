import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';




const Dialogs = (props) => {

   let dialogsList = props.dialogsParticipantsList
      .map(nameList =>
         <NavLink to={'/messages/id' + nameList.id} className={classes.dialogs_participant}>
            <div className={classes.participant_logo}>img</div>
            <div className={classes.participant_name}>{nameList.name}</div>
         </NavLink>
      )

   return (
      <div className={classes.dialogs_wrapper}>
         { dialogsList}
      </div>
   );
}

export default Dialogs;

