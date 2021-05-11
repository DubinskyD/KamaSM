import React from 'react';
import style from './Post.module.css';
import Btn from '../../../global/btn/btn.jsx';
import Textarea from '../../../global/textarea/textarea.jsx';

const Post = (props) => {
   return (
      <div className={style.post_wrapper}>

         <Textarea />
         <Btn text='Post' />
      </div>
   )
}

export default Post;