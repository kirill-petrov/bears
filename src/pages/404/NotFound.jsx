import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="content">
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
}

export default NotFound;
