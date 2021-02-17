import React, { useState } from 'react';
import { CurrentDealCard } from '../CurrentDealCard';
import { CurrentDealsType } from '../../Types';
import { deals } from '../../api/current-deals';
import './CurrentDeals.scss';

export const CurrentDeals = () => {
  const initiallyDisplayedDeals = deals.slice(0, 6);
  const [currentDeals, setCurrentDeals] = useState(initiallyDisplayedDeals);

  const showMoreDeals = () => {
    const currentDealsLength = currentDeals.length;
    const secondIndexInSlice = currentDealsLength + 5;
    const addFiveDeals = [
      ...currentDeals,
      ...deals.slice(currentDealsLength, secondIndexInSlice),
    ];

    if (currentDealsLength < deals.length) {
      setCurrentDeals(addFiveDeals);
    }
  };

  return (
    <div className="app__current-deals-page current-deals-page">
      <ul className="current-deals-page__current-deals current-deals">
        {currentDeals.map(deal => (
          <CurrentDealCard
            key={deal.id}
            deal={deal}
          />
        ))}
      </ul>

      {!(currentDeals.length === deals.length) && (
        <button
          className="current-deals-page__show-more show-more"
          type="button"
          onClick={showMoreDeals}
        >
          Show More
        </button>
      )}
    </div>
  );
};

CurrentDeals.propTypes = CurrentDealsType;
