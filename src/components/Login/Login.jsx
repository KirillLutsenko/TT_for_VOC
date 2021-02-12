import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classnames from 'classnames';
import './Login.scss';

export const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const passwordCheck = (password.trim().length >= 6) === true;
  const loginCheck = (login.trim().length >= 4) === true;

  const resetForm = () => {
    setLogin('');
    setPassword('');
    setLoginError(false);
    setPasswordError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (loginCheck && passwordCheck) {
      resetForm();
    } else if (!loginCheck && !passwordCheck) {
      setLoginError(true);
      setPasswordError(true);
    } else if (!loginCheck) {
      setLoginError(true);
    } else if (!passwordCheck) {
      setPasswordError(true);
    }
  };

  const loginHandleChange = (event) => {
    const { value } = event.target;

    setLogin(value);
    if (value.length > 3) {
      setLoginError(false);
    }
  };

  const passwordHandleChange = (event) => {
    const { value } = event.target;

    setPassword(value);
    if (value.length > 5) {
      setPasswordError(false);
    }
  };

  return (
    <form
      className="app__login-page login-page"
    >
      <label htmlFor="login">Login</label>
      <input
        type="text"
        className={classnames(
          'login-page__login-input input', {
            'input input__error': loginError,
          },
        )}
        name="login"
        id="login"
        value={login}
        onChange={loginHandleChange}
        placeholder="Enter your login"
      />
      {loginError && (
        <p className="form__error">
          Password length minimum 4 characters
        </p>
      )}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        className={classnames(
          'login-page__password-input input', {
            'input input__error': passwordError,
          },
        )}
        name="password"
        id="password"
        value={password}
        onChange={passwordHandleChange}
        placeholder="Enter your password"
      />
      {passwordError && (
        <p className="form__error">
          Password length minimum 6 characters
        </p>
      )}

      {(!loginError && !passwordError && login.trim() && password.trim()) ? (
        <NavLink
          className="login-page__login-button login-button"
          to="/"
          exact
          activeClassName="is-active"
        >
          Log in
        </NavLink>
      ) : (
        <Link
          to="/login"
          className="login-page__login-button login-button"
          onClick={handleSubmit}
        >
          Log in
        </Link>
      )}
    </form>
  );
};
