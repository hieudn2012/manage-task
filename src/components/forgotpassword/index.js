import React from 'react';
import PropTypes from 'prop-types';

ForgotPassword.propTypes = {
  onBack: PropTypes.func.isRequired,
}

ForgotPassword.defaultProps = {
  onBack: null,
}

export default function ForgotPassword({ onBack }) {

  return (
    <div className="ctn-form-right">
      <form className="shadow rounded bg-white form-login">
        <div className="form-group">
          <input
            className="form-control form-control-lg input-shadow"
            id="task-name"
            type="email"
            // value={email}
            // onChange={(e) => onChangeText(e.target.value, LOGIN.EMAIL)}
            placeholder="Email address"
          />
          {/* {msgEmail && <small className="form-text text-danger ml-2">{msgEmail}</small>} */}
        </div>
        <button type="submit" className="btn btn-dark btn-block mb-4 shadow">Forgot Password</button>
        <p onClick={onBack} className="pointer">Back to login</p>
      </form>
    </div>
  )
}