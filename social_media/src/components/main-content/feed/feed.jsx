import React from "react";
import style from './Feed.module.css';
import Post from './post/post.jsx';
import postItem from './postItems/postItem.jsx';

const Feed = () => {
   return (
      <div className={style.feed_wrapper}>
         <postItem />
         <Post />
      </div>
   );
}

export default Feed;