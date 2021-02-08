/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header className="app__header header">
    <nav className="header__nav nav">
      <div className="nav__logo logo" />

      <ul className="nav__header-list header-list">
        <li className="header-list__header-item header-item">
          <Link
            className="header-item__link"
            to="/current-deals"
          >
            Current Deals
          </Link>
        </li>

        <li className="header-list__header-item header-item">
          <a
            className="header-item__link"
          >
            Marketplace
          </a>
        </li>

        <li className="header-list__header-item header-item">
          <a
            href=""
            className="header-item__link"
          >
            Order
          </a>
        </li>

        <li className="header-list__header-item header-item">
          <a
            href=""
            className="header-item__link"
          >
            Sale Shares
          </a>
        </li>
      </ul>
    </nav>
    <div className="header__authorization authorization">
      <div className="authorization__join join">
        <Link
          className="join__link"
          to="/account"
        >
          Join
        </Link>
      </div>
      <button
        className="authorization__login login"
        type="button"
      >
        <Link
          to="/login"
          className="login__link"
        >
          Login
        </Link>
      </button>
    </div>
  </header>
);
