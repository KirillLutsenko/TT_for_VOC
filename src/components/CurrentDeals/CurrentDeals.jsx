import React from 'react';
import { Link } from 'react-router-dom';
import './CurrentDeals.scss';

export const CurrentDeals = () => (
  <div className="app__current-deals current-deals">
    <div>
      <p>Current Deals</p>
      <Link
        to="/deal"
      >
        Trade
      </Link>
    </div>
  </div>
);
