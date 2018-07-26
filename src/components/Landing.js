import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="container">
      <Router>
        <div className="btn-group btn-group-lg" role="group" aria-label="...">
          <Link to="/login">
            <button type="button" className="btn btn-lg btn-dark">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button type="button" className="btn btn-lg btn-dark">
              Sign Up
            </button>
          </Link>
        </div>
      </Router>
    </div>
  );
};

export default Landing;
