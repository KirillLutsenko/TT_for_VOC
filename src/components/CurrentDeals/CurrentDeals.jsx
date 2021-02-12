import React, { useState } from 'react';
import { CurrentDealCard } from '../CurrentDealCard';
import './CurrentDeals.scss';
import { CurrentDealsType } from '../../Types';
import { deals } from '../../api/current-deals';

export const CurrentDeals = ({ match }) => {
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
            mainTitle={deal.mainTitle}
            availableShares={deal.availableShares}
            shareholder={deal.shareholder}
            targetedInvestorIrr={deal.targetedInvestorIrr}
            targetedEquityMultiple={deal.targetedEquityMultiple}
            targetedAvarageCashYield={deal.targetedAvarageCashYield}
            distributionCommencement={deal.distributionCommencement}
            distributionPeriod={deal.distributionPeriod}
            id={deal.id}
          />
        ))}
      </ul>

      {!(currentDeals.length === deals.length) ? (
        <button
          className="current-deals-page__show-more show-more"
          type="button"
          onClick={showMoreDeals}
        >
          Show More
        </button>
      ) : (
        <div />
      )}
    </div>
  );
};

CurrentDeals.propTypes = CurrentDealsType;
