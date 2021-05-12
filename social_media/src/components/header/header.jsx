import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
   return (
      <header className={classes.header}>
         Header

         {props.isAuth
            ? <div>
               <span>{props.login} - </span>
               <button onClick={props.logout}>Logout</button>
            </div>
            : <NavLink to={'/login'}>login</NavLink>}


      </header>
   )
}

export default Header;