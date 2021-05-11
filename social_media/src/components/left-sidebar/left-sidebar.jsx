import React from 'react';
import classes from './LeftSidebar.module.css';
import { NavLink } from 'react-router-dom';

const LeftSidebar = () => {
   return (
      <div className={classes.left_sidebar}>
         <nav className={classes.nav}>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/messages">Messages</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/feed">Feed</NavLink>
            <NavLink to="/users">Users</NavLink>
         </nav>
      </div>
   );
}

export default LeftSidebar;