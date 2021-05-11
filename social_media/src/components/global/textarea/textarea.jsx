import React from 'react';
import style from './Textarea.module.css';

const Textarea = (props) => {
   return (
      <div className={style.textarea}>
         <textarea
            className={style.post_text}
            placeholder='some text1'
            rows='3'
         >

         </textarea>
         <span></span>
      </div>

   )
}

export default Textarea;