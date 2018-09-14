import React from 'react';
import { connect } from 'react-redux';

import history from './history';

const authModule = (Component) => {
  class Auth extends React.Component {
    componentWillMount() {
      const { location, systemUser } = this.props;      
      const { pathname } = location;
      if (pathname !== '/' && pathname !== '/login' && !systemUser.isloggedIn) {
        history.push('/');
      }
    }

    render() {
      return (
        <Component {...this.props} />
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      systemUser: state.user.systemUser
    };
  };
  return connect(mapStateToProps)(Auth);
}

export default authModule;
