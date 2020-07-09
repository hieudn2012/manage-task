import React from 'react';
import Login from '../../components/login';
import NavLanding from '../../components/navlanding';

export default function Landing() {

  return (
    <div>
      <header>
        <section>
          <NavLanding /> 
        </section>
      </header>
      <main>
        <section className="ctn-landing">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="text-white py-5 left">
                  <h4>Ura landing page template</h4>
                  <p className="mt-3">A versatile and easy solution for your all kinds of</p>
                  <p className="mb-3">software and business landing page needs.</p>
                  <button className="btn bg-white text-primary">KNOW MORE</button>
                </div>
              </div>
              <div className="col-md-6">
                <Login />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="mt-5 py-5 text-center">
              <h4>Using Ura to build your site is easy</h4>
              <p>Best in class big data software and analytics services will render</p>
              <p>your huge chunks into meaningful data. Try the demo now.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}