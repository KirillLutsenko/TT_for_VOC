import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Slider } from '../Slider';
import { deals } from '../../api/current-deals';
import './Deal.scss';

export const Deal = withRouter(
  ({ match }) => {
    const [deal, setDeal] = useState(null);
    const [fullDescription, setFullDescription] = useState(false);
    const { dealId } = match.params;

    useEffect(() => {
      const selectedDeal = deals
        .find(selDeal => selDeal.id === dealId);

      setDeal(selectedDeal);
    }, [dealId]);

    if (!deal) {
      return (<p className="app__empty-page">Loading</p>);
    }

    const { description } = deal.dealInfo;
    const smallDescription = description.substring(0, 191);

    const showMoreDetails = () => {
      setFullDescription(true);
    };

    const { transactions } = deal.dealInfo;

    return (
      <div className="current-deals__deal deal">
        <div className="deal__deal-menu deal-menu">
          <Slider deal={deal} />

          <div className="deal-menu__deal-info deal-info">
            <h2 className="deal-info__title">
              {deal.name}
            </h2>

            {(!fullDescription) ? (
              <p className="deal-info__description">
                {smallDescription}
              </p>
            ) : (
              <p className="deal-info__description">
                {description}
              </p>
            )}

            {!fullDescription && (
              <button
                type="button"
                onClick={showMoreDetails}
                className="deal-info__more-details more-details"
              >
                More Details
              </button>
            )}
          </div>
        </div>

        <div className="deal__bottom-section bottom-section">
          <div className="bottom-section__bottom-info bottom-info">
            <div className="bottom-info__description">
              <div className="bottom-info__title" />

              <div className="bottom-info__text">
                <p className="bottom-info__paragraph">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </p>

                <p className="bottom-info__paragraph">
                  Donec quam felis, ultricies nec,
                  pellentesque eu, pretium quis, sem.
                  Nulla consequat massa quis enim.
                  Donec pede justo, fringilla vel,
                  aliquet nec,vulputate eget, arcu. In enim justo, rhoncus ut,
                  imperdiet a, venenatis vitae, justo.
                  Nullam dictum felis eu pede mollis pretium.
                </p>

                <p className="bottom-info__paragraph">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </p>
              </div>
            </div>
          </div>

          <div className="bottom-section__info-card info-card">
            <div className="info-card__card-item card-item  first-item">
              <span className="card-item__title">
                Targeted Investor IRR
              </span>
              <b className="card-item__value">
                {deal.targetedInvestorIrr}
              </b>
            </div>

            <div
              className="info-card__card-item card-item"
            >
              <span className="card-item__title">
                Targeted Equity Multiple
              </span>
              <b className="card-item__value">
                {deal.targetedEquityMultiple}
              </b>
            </div>

            <div
              className="info-card__card-item card-item"
            >
              <span className="card-item__title">
                Targeted Avarage Cash Yield
              </span>
              <b className="card-item__value">
                {deal.targetedAvarageCashYield}
              </b>
            </div>

            <div
              className="info-card__card-item card-item"
            >
              <span className="card-item__title">
                Distribution Commencement
              </span>
              <b className="card-item__value">
                {deal.distributionCommencement}
              </b>
            </div>

            <div
              className="info-card__card-item card-item"
            >
              <span className="card-item__title">
                Distribution Period
              </span>
              <b className="card-item__value">
                {deal.distributionPeriod}
              </b>
            </div>

            <div
              className="info-card__card-item card-item"
            >
              <span className="card-item__title">
                Target Portfolio Close Date
              </span>
              <b className="card-item__value">
                {deal.targetPortfolioCloseDate}
              </b>
            </div>
          </div>
        </div>
        <div className="deal__transactions transactions">
          <h2 className="transactions__title">
            Transactions
          </h2>

          <table className="transactions__table table">
            <thead className="table__header-block">
              <tr className="table__header-row">
                <th className="table__header-item">Advertiser</th>
                <th className="table__header-item">Available</th>
                <th className="table__header-item">Price</th>
                <th className="table__header-item">Accepted Currency</th>
                <th className="table__header-item">Trade</th>
              </tr>
            </thead>
            <tbody className="table__body-block">
              {transactions.map(transaction => (
                <tr
                  key={transaction.advertiser + transaction.available}
                  className="table__body-row"
                >
                  <td className="table__body-item">
                    {transaction.advertiser}
                  </td>
                  <td className="table__body-item">
                    {transaction.available}
                  </td>
                  <td className="table__body-item">
                    {transaction.price}
                  </td>
                  <td className="table__body-item">
                    {transaction.acceptedCurrency}
                  </td>
                  <td className="table__body-item">
                    <button
                      className="table__table-button table-button"
                      type="button"
                    >
                      Buy
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  },
);
