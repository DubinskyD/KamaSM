import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
   return (
      <header className={classes.header}>
         Header

         {props.isAuth
            ? <span>{props.login}</span>
            : <NavLink to={'/login'}>login</NavLink>}


      </header>
   )
}

export default Header;