import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { LOGIN } from '../../const';
import { checkEmail, checkPassword } from '../../validation/validateUtil';

export default function Login() {

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msgEmail, setMsgEmail] = useState('');
  const [msgPassword, setMsgPassword] = useState('');

  function onChangeText(value, type) {
    switch (type) {
      case LOGIN.EMAIL:
        setEmail(value);
        setMsgEmail(checkEmail(value));
        break;
      case LOGIN.PASSWORD:
        setPassword(value);
        setMsgPassword(checkPassword(value));
        break;
      default:
        break;
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    history.push("/home");
  }

  return (
    <div className="ctn-form-login">
      <form onSubmit={(e) => onSubmit(e)} className="shadow rounded bg-white form-login">
        <div className="form-group">
          <input
            className="form-control form-control-lg input-shadow"
            id="task-name"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => onChangeText(e.target.value, LOGIN.EMAIL)}
            placeholder="Email address"
          />
          {msgEmail && <small className="form-text text-danger ml-2">{msgEmail}</small>}
        </div>
        <div className="form-group">
          <input
            className="form-control form-control-lg input-shadow"
            id="status"
            type="password"
            value={password}
            onChange={(e) => onChangeText(e.target.value, LOGIN.PASSWORD)}
            placeholder="Password"
          />
          {msgPassword && <small className="form-text text-danger ml-2">{msgPassword}</small>}
        </div>
        <div className="form-row m-0 justify-content-between">
          <div className="row m-0 align-items-center mb-3">
            <input type="checkbox" />
            <p className="ml-2">Remember me</p>
          </div>
          <p>Forgot Password</p>
        </div>
        <button type="submit" className="btn btn-dark btn-block mb-4 shadow">Login</button>
        <p className="h6 text-center">Don't have an account? Register here</p>
      </form>
    </div>
  )
}