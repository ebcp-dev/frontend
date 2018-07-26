import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import { Link } from 'react-router-dom';

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
    const userInput = {
      email: values.email,
      password: values.password
    };
    // Login user action
    this.props.loginUser(userInput);
  };
  render() {
    let { errors, loading } = this.state;
    return (
      <div className="container">
        <Link to="/"> </Link>
        <LoginForm onSubmit={this.submit} loading={loading} errors={errors} />
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
  { loginUser }
)(Login);
