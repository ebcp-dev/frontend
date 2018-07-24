import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
    const { auth } = this.props;
    if (auth.isAuthenticated) {
      return (
        <div>
          <h4>Welcome {auth.user.email}</h4>
          <button type="button" className="btn btn-dark">
            <Link to="/" onClick={this.onLogoutClick}>
              Log Out
            </Link>
          </button>
        </div>
      );
    }
    return (
      <div>
        <h4>You are not authenticated.</h4>

        <button type="button" className="btn btn-dark">
          <Link to="/">Home</Link>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(LoggedIn);
