import React from 'react'
import Header from './header';
import { getAuthThunkCreator, logOutThunkCreator, setUserData } from '../../Redux/Reducers/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuth()
}

  render() {
    return (
      <Header {...this.props} />
    )
  };
}

const mapStateToProps = (state) => ({
  UserID: state.AuthPage.UserID,
  email: state.AuthPage.email,
  login: state.AuthPage.login,
  isAuth: state.AuthPage.isAuth})

export default connect (mapStateToProps, {setUserData, logOut: logOutThunkCreator, getAuth: getAuthThunkCreator}) (HeaderContainer);
