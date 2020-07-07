import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLanding() {
  return (
    <div className="nav-landing">
      <h4>Uram.</h4>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Features</Link>
        </li>
        <li>
          <Link to="/">Reviews</Link>
        </li>
        <li>
          <Link to="/">Pricing</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
      </ul>
    </div>
  )
}