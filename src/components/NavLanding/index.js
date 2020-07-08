import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavLanding() {

  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setGoingUp(currentScrollY > 10 ? true : false)
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  return (
    <div className={`nav-landing ${goingUp && 'bg-nav-dark'}`}>
      <h4>Uram.</h4>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/taskmanage">Task Manage</Link>
        </li>
        <li>
          <Link to="/checkin">Checkin</Link>
        </li>
      </ul>
    </div>
  )
}