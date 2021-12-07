import React from 'react';
import styles from './User.module.css';
import userPhoto from '../../../../src/assets/image/photo.svg';
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProgress, unfollow, follow }) => {
   return <div className={styles.wrapper}>
      <span>
         <div>
            <NavLink to={'/profile/' + user.id}>
               <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="no "
                  className={styles.img} />
            </NavLink>
         </div>
         <span>
            {user.followed
               ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { unfollow(user.id) }}>Unfollow</button>
               : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { follow(user.id); }}>Follow</button>
            }
         </span>
      </span>
      <span>
         <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
         </span>
      </span>
   </div>
}

export default User;