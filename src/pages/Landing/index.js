import React from 'react';
import Login from '../../components/Login'

export default function Landing() {
  
  return (
    <div className="container-login-page">
      <div className="row justify-content-center w-100">
        <div className="col-lg-8 col-md-0">
        </div>
        <div className="col-lg-4 col-md-8">
          <Login />
        </div>
      </div>
    </div>
  )
}