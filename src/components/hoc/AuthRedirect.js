import { Navigate } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

export const withAuthRedirect = (Component) => {
  class AuthRedirectComponent extends React.Component {
    render () {
      if (!this.props.isAuth) {return <Navigate to={'/login'} />};
      return <Component {...this.props} />
    };
};

  const mapStateToProps = (state) => {
    return {
      isAuth: state.AuthPage.isAuth,
    };
  };
const RedirectComponent = connect (mapStateToProps)(AuthRedirectComponent)
  return RedirectComponent;}
