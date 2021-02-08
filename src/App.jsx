import React from 'react';
import { Route } from 'react-router-dom';
import { Account } from './components/Account';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { CurrentDeals } from './components/CurrentDeals';
import { Deal } from './components/Deal';
// import currentDeals from './api/data.json';
import './styles/general.scss';

export const App = () => (
  <div className="app">
    <Header />

    <Route path="/login">
      <Login />
    </Route>

    <Route path="/account">
      <Account />
    </Route>

    <Route path="/current-deals">
      <CurrentDeals />
    </Route>

    <Route path="/deal">
      <Deal />
    </Route>

    <Footer />
  </div>
);
