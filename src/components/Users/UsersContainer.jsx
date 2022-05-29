import { connect } from 'react-redux';
import React  from 'react';
import Users from './Users';
import {
  followsSuccess,
  setCurrentPage,
  unfollowsSuccess,
  toggleIsFollowingInProgress,
  unFollowThunkCreator,
  followThunkCreator,
  requestUsersThunkCreator,
} from '../../Redux/Reducers/users-reducer';
import Preloader from '../../common/preloader/isFetching_preloader';
import { withAuthRedirect } from '../hoc/AuthRedirect';
import { compose } from 'redux';
import {
  getCurrentPage,
  getIsFetching, getIsFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from '../../Redux/Selectors/user-selectors';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.requestUsers(this.props.CurrentPage, this.props.PageSize);
  }

  onPageChanged = (pageNumb) => {
    this.props.requestUsers(pageNumb, this.props.PageSize);
    this.props.setCurrentPage(pageNumb);
  }

  render() {
    return ( <div>
      {this.props.isFetching ? <Preloader /> : null}
        <Users Users={this.props.Users}
               UsersCount={this.props.UsersCount}
               PageSize={this.props.PageSize}
               CurrentPage={this.props.CurrentPage}
               unfollow = {this.props.unfollow}
               follow = {this.props.follow}
               onPageChanged={this.onPageChanged.bind(this)}
               isFollowingInProgress={this.props.isFollowingInProgress}
        />
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    Users: getUsers(state),
    PageSize: getPageSize(state),
    UsersCount: getTotalUsersCount(state),
    CurrentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isFollowingInProgress: getIsFollowingInProgress(state),
  };
};

export default compose(
  connect (mapStateToProps,
  {followsSuccess, unfollowsSuccess,
    setCurrentPage, toggleIsFollowingInProgress, requestUsers: requestUsersThunkCreator,
    unfollow: unFollowThunkCreator,  follow: followThunkCreator}),
    withAuthRedirect
)
(UsersContainer);