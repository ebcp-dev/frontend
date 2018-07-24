import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class LoggedIn extends Component {
  constructor() {
    super();
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    return (
      <div>
        You are logged in.
        <a href="/logout" onClick={this.onLogoutClick} className="nav-link">
          Logout
        </a>
      </div>
    );
  }
}

export default connect(
  null,
  { logoutUser }
)(LoggedIn);
