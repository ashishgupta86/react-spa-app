import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/user';

class Header extends Component {
  constructor(){
    super();
    this.logout = this.logout.bind(this);
  }

  logout(e){
    e.preventDefault();
    this.props.dispatch(logout());
  }

  render() {
    const { systemUser } = this.props;
    return (
      <header>
        <h1>My App</h1>
        <div className="rhs-content">
          <span className={systemUser.isloggedIn ? 'show' : 'hide'}>
            {systemUser.userEmail}
          </span>
          <span className={systemUser.isloggedIn ? 'show' : 'hide'}>
            <a onClick={this.logout}>Log out</a>
          </span>
        </div>        
      </header>
    )
  }
}

const mapStateToProps = (state) => {  
  return {
    systemUser: state.user.systemUser
  };
};

export default connect(mapStateToProps)(Header);