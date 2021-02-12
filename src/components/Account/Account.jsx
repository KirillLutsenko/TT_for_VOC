/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './Account.scss';

export const Account = () => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const phoneValidationTrue = (phone.trim().length >= 10) === true;

  const checkEmail = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i);
  const emailValidationTrue = checkEmail.test(email)
    || email.trim().length >= 7;
  const emailValidationFalse = !checkEmail.test(email)
    || email.trim().length < 7;

  const passwordValidationTrue = (password.length >= 6) === true;

  const nameValidationTrue = (name.trim().length >= 2) === true;
  const lastNameValidationTrue = (lastName.trim().length >= 2) === true;

  const resetForm = () => {
    setPhone('');
    setEmail('');
    setPassword('');
    setName('');
    setLastName('');
    setPhoneError(false);
    setEmailError(false);
    setPasswordError(false);
    setNameError(false);
    setLastNameError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (phoneValidationTrue
      && emailValidationTrue
      && passwordValidationTrue
      && nameValidationTrue
      && lastNameValidationTrue
    ) {
      resetForm();
    } else if (!phoneValidationTrue
        && emailValidationFalse
        && !passwordValidationTrue
        && !nameValidationTrue
        && !lastNameValidationTrue
    ) {
      setPhoneError(true);
      setEmailError(true);
      setPasswordError(true);
      setNameError(true);
      setLastNameError(true);
    } else if (!phoneValidationTrue) {
      setPhoneError(true);
    } else if (emailValidationFalse) {
      setEmailError(true);
    } else if (!passwordValidationTrue) {
      setPasswordError(true);
    } else if (!nameValidationTrue) {
      setNameError(true);
    } else if (!lastNameValidationTrue) {
      setLastNameError(true);
    }
  };

  const phoneHandleChange = (event) => {
    const { value } = event.target;

    setPhone(value);
    if (value.length > 0) {
      setPhoneError(false);
    }
  };

  const emailHandleChange = (event) => {
    const { value } = event.target;

    setEmail(value);
    if (value.length > 0) {
      setEmailError(false);
    }
  };

  const passwordHandleChange = (event) => {
    const { value } = event.target;

    setPassword(value);
    if (value.length > 5) {
      setPasswordError(false);
    }
  };

  const nameHandleChange = (event) => {
    const { value } = event.target;

    setName(value);
    if (value.length >= 2) {
      setNameError(false);
    }
  };

  const lastNameHandleChange = (event) => {
    const { value } = event.target;

    setLastName(value);
    if (value.length >= 2) {
      setLastNameError(false);
    }
  };

  return (
    <div className="app__account-page account-page">
      <nav className="account-page__navigation navigation">
        <button
          type="button"
          className="navigation__app-button app-button"
        >
          KYC Application
        </button>

        <ul className="navigation__nav-list nav-list">
          <li className="nav-list__nav-item nav-item">
            <a href="#" className="nav-item__wallet nav-item__link" />
          </li>

          <li className="nav-list__nav-item nav-item">
            <a href="#" className="nav-item__statements nav-item__link" />
          </li>

          <li className="nav-list__nav-item nav-item">
            <a href="#" className="nav-item__transactions nav-item__link" />
          </li>

          <li className="nav-list__nav-item nav-item">
            <a href="#" className="nav-item__manage nav-item__link" />
          </li>

          <li className="nav-list__nav-item nav-item">
            <a href="#" className="nav-item__contact-us nav-item__link" />
          </li>

          <li className="nav-list__nav-item nav-item">
            <a href="#" className="nav-item__bank-account nav-item__link" />
          </li>
        </ul>
      </nav>

      <div className="account-page__account-info account-info">
        <div className="account-info__user-info user-info" />

        <form action="submit" className="account-info__info-form info-form">
          <div className="info-form__inputs-form inputs-form">
            <div className="inputs-form__left-inputs left-inputs">
              <label
                htmlFor="phone-number"
                className="left-inputs__phone-label"
              >
                Phone Number
              </label>
              <input
                type="tel"
                className="left-inputs__phone-input form-input"
                id="phone-number"
                placeholder="+38 050 225 98 14"
                value={phone}
                onChange={phoneHandleChange}
              />
              {phoneError && (
                <p className="form__error">
                  Enter correct phone number please
                </p>
              )}

              <label htmlFor="email" className="left-inputs__email-label">
                E-mail
              </label>
              <input
                type="text"
                className="left-inputs__email-input form-input"
                id="email"
                placeholder="useremailexample@gmail.com"
                value={email}
                onChange={emailHandleChange}
              />
              {emailError && (
                <p className="form__error">
                  Enter correct email please
                </p>
              )}

              <label htmlFor="password" className="left-inputs__password">
                Password
              </label>
              <input
                type="password"
                className="left-inputs__password form-input"
                id="password"
                placeholder="************"
                value={password}
                onChange={passwordHandleChange}
              />
              {passwordError && (
                <p className="form__error">
                  Password length minimum 6 characters
                </p>
              )}
            </div>

            <div className="inputs-form__right-inputs right-inputs">
              <label htmlFor="first-name" className="right-inputs__name-label">
                First Name
              </label>
              <input
                type="text"
                className="right-inputs__name-input form-input"
                id="first-name"
                placeholder="User"
                value={name}
                onChange={nameHandleChange}
              />
              {nameError && (
                <p className="form__error">
                  First Name length minimum 2 characters
                </p>
              )}

              <label
                htmlFor="lastname"
                className="right-inputs__lastname-label"
              >
                Last Name
              </label>
              <input
                type="text"
                className="right-inputs__lastname-input form-input"
                id="lastname"
                placeholder="Nickname"
                value={lastName}
                onChange={lastNameHandleChange}
              />
              {lastNameError && (
                <p className="form__error">
                  Last name length minimum 2 characters
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="info-form__verify-button verify-button"
            onClick={handleSubmit}
          >
            Verify your identity
          </button>
        </form>
      </div>
    </div>
  );
};
