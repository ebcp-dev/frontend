import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import Spinner from 'react-spinkit';

let LoginForm = props => {
  const { handleSubmit, errors, loading } = props;

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <div className="form-group">
          <div>
            <label htmlFor="email">Email</label>
            <Field
              className="form-control"
              name="email"
              component="input"
              type="email"
            />
            {errors.email && <div className="login-errors">{errors.email}</div>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field
              className="form-control"
              name="password"
              component="input"
              type="password"
            />
            {errors.password && (
              <div className="login-errors">{errors.password}</div>
            )}
          </div>
          <br />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
      {loading && <Spinner name="circle" />}
      <button type="button" className="btn btn-dark">
        <Link to="/">Back Home</Link>
      </button>
    </div>
  );
};

LoginForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm);

export default LoginForm;
