import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Spinner from 'react-spinkit';

let LoginForm = props => {
  const { handleSubmit, errors, loading } = props;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Log In</h1>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
        {errors.email && <div className="login-errors">{errors.email}</div>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
        {errors.password && (
          <div className="login-errors">{errors.password}</div>
        )}
      </div>
      <button type="submit">Submit</button>
      {loading && <Spinner name="circle" />}
    </form>
  );
};

LoginForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm);

export default LoginForm;
