import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, saveAvatar } from '../../../redux/reducers/profileReducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
   refreshProfile() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = this.props.authorizedUserId;
      }
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);
   }

   componentDidMount() {
      this.refreshProfile();
   }
   componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.match.params.userId !== prevProps.match.params.userId) {
         this.refreshProfile();
      }
   }

   render() {
      return (
         <Profile {...this.props}
            isOwner={!this.props.match.params.userId}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            saveAvatar={this.props.saveAvatar} />
      )
   }
}

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   authorizedUserId: state.auth.userId,
   isAuth: state.auth.isAuth,

})

export default compose(
   connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, saveAvatar }),
   withRouter,
   withAuthRedirect
)(ProfileContainer);