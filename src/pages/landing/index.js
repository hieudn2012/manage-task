import React, { useState } from 'react';
import Login from '../../components/login';
import NavLanding from '../../components/navlanding';
import Register from '../../components/register';
import ForgotPassword from '../../components/forgotpassword';

export default function Landing() {

  const [switchForm, setSwitchForm] = useState(1);

  function _renderForm() {
    switch (switchForm) {
      case 1: return <Login
        onSwitchRegister={() => setSwitchForm(2)}
        onSwitchForgotPassword={() => setSwitchForm(3)} />
      case 2: return <Register
        onBack={() => setSwitchForm(1)} />
      case 3: return <ForgotPassword
        onBack={() => setSwitchForm(1)} />
      default:
        break;
    }
  }


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
                {_renderForm()}
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