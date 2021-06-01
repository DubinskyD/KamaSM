import React from 'react';
import preloader from '../../assets/image/animated-loading.png';
import style from './preloader.module.css';

let Preloader = (props) => {
   return <img className={style.preloader} src={preloader} alt='null'></img>
}

export default Preloader;