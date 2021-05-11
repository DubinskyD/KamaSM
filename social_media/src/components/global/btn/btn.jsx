import React from 'react';
import style from './Btn.module.css';


const Btn = (props) => {
   return (
      <div>
         <div className={style.button}>
            <span>{props.text}</span>
         </div>
      </div>
   )
}

export default Btn;