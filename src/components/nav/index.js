import React from 'react';
import Clock from '../timeclock';
import Language from '../language';
import { img } from '../../images';

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-nav-dark">
        <img
          src={img.logo}
          style={{ width: 20, height: 20 }}
          alt="logo"
          className="pointer mr-4"
        />
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <a href="/" className="text-white text-decoration-none">Login</a>
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