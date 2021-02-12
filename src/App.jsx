import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Account } from './components/Account';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { CurrentDeals } from './components/CurrentDeals';
import { Deal } from './components/Deal';
import './styles/general.scss';
import './App.scss';

export const App = () => (
  <div className="app">
    <Header />

    <Switch>
      <Route
        path="/login"
      >
        <Login />
      </Route>

      <Route path="/account">
        <Account />
      </Route>

      <Route path="/marketplace">
        <p className="app__empty-page">
          Marketplace under development
        </p>
      </Route>

      <Route path="/order">
        <p className="app__empty-page">
          Order page under development
        </p>
      </Route>

      <Route path="/sale-shares">
        <p className="app__empty-page">
          Sale Shares page under development
        </p>
      </Route>

      <Route path="/current-deals/:dealId">
        <Deal />
      </Route>

      <Route path="/current-deals/:dealId?" component={CurrentDeals} />

      <Redirect path="/" to="/current-deals" />
      <Redirect path="" to="/current-deals" />

      <p className="app__empty-page">
        Not found page
      </p>
    </Switch>

    <Footer />
  </div>
);
