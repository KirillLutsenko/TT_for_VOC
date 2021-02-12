/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => (
  <header className="app__header header">
    <nav className="header__nav nav">
      <div className="nav__logo logo" />

      <ul className="nav__header-list header-list">
        <li className="header-list__header-item header-item">
          <NavLink
            className="header-item__link"
            to="/current-deals"
            exact
            activeClassName="is-active"
          >
            Current Deals
          </NavLink>
        </li>

        <li className="header-list__header-item header-item">
          <NavLink
            className="header-item__link"
            to="/marketplace"
            activeClassName="is-active"
          >
            Marketplace
          </NavLink>
        </li>

        <li className="header-list__header-item header-item">
          <NavLink
            className="header-item__link"
            to="/order"
            activeClassName="is-active"
          >
            Order
          </NavLink>
        </li>

        <li className="header-list__header-item header-item">
          <NavLink
            className="header-item__link"
            to="/sale-shares"
            activeClassName="is-active"
          >
            Sale Shares
          </NavLink>
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
      <div
        className="authorization__login login"
      >
        <Link
          to="/login"
          className="login__link"
        >
          Login
        </Link>
      </div>
    </div>
  </header>
);
