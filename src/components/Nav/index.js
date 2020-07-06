import React from 'react';
import { Link } from 'react-router-dom';
import Clock from '../TimeClock';
import Language from '../Language';
import { img } from '../../images';

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img
          src={img.logo}
          style={{ width: 20, height: 20 }}
          alt="logo"
          className="pointer mr-4"
        />
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <Link to="/">Login</Link>
          </ul>
          <div className="row px-2">
            <Language />
            <div className="ml-3">
              <Clock />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}