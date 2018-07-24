import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

import LoginForm from './LoginForm';

class Login extends Component {
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
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/loggedin');
    }
  }

  componentWillReceiveProps(nextProps) {
    // Redirect to logged in page
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/loggedin');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  submit = values => {
    const userInput = {
      email: values.email,
      password: values.password
    };
    this.setState({ loading: true });
    // Login user action
    this.props.loginUser(userInput);
  };
  render() {
    let { errors, loading } = this.state;
    return (
      <LoginForm onSubmit={this.submit} loading={loading} errors={errors} />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
