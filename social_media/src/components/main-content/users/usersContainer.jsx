import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from '../../../redux/reducers/usersReducer';

import Users from './users';
import Preloader from '../../common/preloader';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';



class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
   }

   onPageChanged = (pageNumber) => {
      this.props.getUsers(pageNumber, this.props.pageSize);
      // this.props.setCurrentPage(pageNumber);
      // this.props.toggleIsFetching(true);
      // usersAPI.getUsers(pageNumber, this.props.pageSize)
      //    .then(data => {
      //       this.props.toggleIsFetching(false);
      //       this.props.setUsers(data.items);
      //    });
   }

   render() {
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
         />
      </>
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress

   }
}

// let mapDispatchToProps = (dispatch) => {
//    return {
//       follow: followActionCreator,
//       unfollow: unfollowActionCreator,
//       setUsers: setUsersActionCreator,
//       setCurrentPage: setCurrentPageActionCreator,
//       setTotalUsersCount: setTotalUsersCountActionCreator,
//       toggleIsFetching: toggleIsFetchingActionCreator
//    }
// }




export default compose(
   withAuthRedirect,
   connect(mapStateToProps, {
      follow, unfollow, setCurrentPage,
      toggleFollowingProgress, getUsers
   })
)(UsersContainer);

