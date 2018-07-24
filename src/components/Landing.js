import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="container">
      <div className="btn-group btn-group-lg" role="group" aria-label="...">
        <button type="button" className="btn btn-dark">
          <Link to="/login">Login</Link>
        </button>
        <button type="button" className="btn btn-dark">
          <Link to="/signup">Sign Up</Link>
        </button>
      </div>
    </div>
  );
};

export default Landing;
