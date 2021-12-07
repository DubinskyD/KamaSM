import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
   return (
      <header className={classes.header}>
         {props.isAuth
            ?
            <div>
               <span>{props.login} </span>
               <button className={classes.button} onClick={props.logout}>Logout</button>
            </div>
            : <NavLink to={'/login'}></NavLink>}
      </header >
   )
}

export default Header;