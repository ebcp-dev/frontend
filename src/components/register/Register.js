import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

import RegisterForm from './RegisterForm';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      loading: false
    };
  }

  componentWillMount() {
    this.submit = this.submit.bind(this);
    this.setState({ loading: false });
  }

  componentDidMount() {
    // Redirect to logged in page
    if (this.props.auth.isAuthenticated) {
      this.setState({ loading: true });
      this.props.history.push('/loggedin');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.setState({ loading: true });
      this.props.history.push('/loggedin');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  submit = values => {
    const registerInput = {
      email: values.email,
      password: values.password,
      password2: values.password2
    };
    // Pass-in input to registerUser with history to redirect on succesful registration
    this.props.registerUser(registerInput, this.props.history);
  };
  render() {
    let { errors, loading } = this.state;
    return (
      <div className="container">
        <RegisterForm
          onSubmit={this.submit}
          loading={loading}
          errors={errors}
        />
        <Link to="/">
          <button type="button" className="btn btn-dark">
            Back Home
          </button>
        </Link>
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
  { registerUser }
)(withRouter(Register));
