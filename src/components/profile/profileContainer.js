import React from 'react';
import Profile from './profile';
import {
  addPost, getProfileThunkCreator,
  getStatusThunkCreator, setUserID,
  updateStatusThunkCreator,
} from '../../Redux/Reducers/profile-reducer';
import { connect } from 'react-redux';
import Preloader from '../../common/preloader/isFetching_preloader';
import { withAuthRedirect } from '../hoc/AuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userID = this.props.UserID;
    if (!userID) {
      userID = this.props.authorizedUserId
      this.onPageChanged(userID)
    };
    };

  componentDidUpdate(prevProps, prevState, snapShot) { 

    if (this.props.UserID !== prevProps.UserID
      && !this.props.isFetching
      && !this.props.toggleIsRequestsInProgress)
    { this.onPageChanged(this.props.UserID);}
  };

  onPageChanged = (userId) => {
    if (!this.props.isFetching && !this.props.isRequestsInProgress) {
      this.props.setUserID(userId);
      this.props.getProfile(userId);
      this.props.getStatus(userId);
    }
  };

  render() {
    return ( <div>
      {this.props.isFetching || this.props.isRequestsInProgress ? <Preloader /> : null}
        <Profile {...this.props} onPageChanged={this.onPageChanged.bind(this)} />
      </div>)
  };
};

let mapStateToProps = (state) => {
  return {
    Profile: state.ProfilePage.Profile,
    PostsData: state.ProfilePage.PostsData,
    NewPostText: state.ProfilePage.NewPostText,
    UserID: state.ProfilePage.UserID,
    isFetching: state.ProfilePage.isFetching,
    status: state.ProfilePage.status,
    authorizedUserId: state.AuthPage.UserID,
    isAuth: state.AuthPage.isAuth,
    isRequestsInProgress: state.ProfilePage.isRequestsInProgress
 }};

export default compose(
  connect (mapStateToProps,
      {addPost, setUserID,
      getProfile: getProfileThunkCreator, 
      getStatus: getStatusThunkCreator,
      updateStatus: updateStatusThunkCreator,
    }),
  withAuthRedirect
)
  (ProfileContainer);


