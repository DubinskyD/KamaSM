import React from 'react';
import Paginator from '../../common/paginator/paginator.jsx';
import User from './user';
import styles from './Users.module.css';

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, ...props }) => {

   return <div>
      <Paginator currentPage={currentPage} pageSize={pageSize}
         totalItemsCount={totalUsersCount} onPageChanged={onPageChanged} portionSize={10} />

      {props.users.map(u => <User user={u}
         followingInProgress={props.followingInProgress}
         follow={props.follow}
         unfollow={props.unfollow}
         key={u.id}
         className={styles.wrapper}
      />
      )
      }

   </div>
}


export default Users;