import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Spinner from 'react-spinkit';

let RegisterForm = props => {
  const { handleSubmit, errors, loading } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
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
          <div>
            <label htmlFor="password2">Confirm Password</label>
            <Field
              className="form-control"
              name="password2"
              component="input"
              type="password"
            />
            {errors.password2 && (
              <div className="login-errors">{errors.password2}</div>
            )}
          </div>
          <br />
          <button className="btn btn-lg btn-primary" type="submit">
            Submit
          </button>
          {loading && <Spinner name="circle" />}
        </div>
      </form>
    </div>
  );
};

RegisterForm = reduxForm({
  // a unique name for the form
  form: 'register'
})(RegisterForm);

export default RegisterForm;
