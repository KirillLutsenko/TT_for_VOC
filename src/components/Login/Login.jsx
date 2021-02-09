import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './Login.scss';

export const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const resetForm = () => {
    setLogin('');
    setPassword('');
    setLoginError(false);
    setPasswordError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (login.trim() && password.trim()) {
      resetForm();
    } else if (!login.trim() && !password.trim()) {
      setLoginError(true);
      setPasswordError(true);
    } else if (!login.trim()) {
      setLoginError(true);
    } else if (!password.trim()) {
      setPasswordError(true);
    }
  };

  const loginHandleChange = (event) => {
    const { value } = event.target;

    setLogin(value);
    if (value.length > 0) {
      setLoginError(false);
    }
  };

  const passwordHandleChange = (event) => {
    const { value } = event.target;

    setPassword(value);
    if (value.length > 0) {
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
        className={classNames(
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
          Enter your login please
        </p>
      )}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        className={classNames(
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
          Enter your password please
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
