import React from 'react';
import { Link } from 'react-router-dom';
import './CurrentDealCard.scss';
import { CurrentDealType } from '../../Types';

export const CurrentDeal = ({
  mainTitle,
  availableShares,
  shareholder,
  targetedInvestorIrr,
  targetedEquityMultiple,
  targetedAvarageCashYield,
  distributionCommencement,
  distributionPeriod,
}) => (
  <li className="current-deals__card card">
    <div className="card__card-header card-header">
      <h4 className="card-header__title">
        {mainTitle}
      </h4>

      <span className="card-header__shares">
        {`Available Shares: ${availableShares}`}
      </span>
    </div>

    <div className="card__image">
      <div className="card__shareholder-block shareholder-block">
        <span className="shareholder-block__info">
          {shareholder}
        </span>
      </div>
    </div>

    <div className="card__card-info card-info">
      <div className="card-info__card-item">
        <span className="card-item__title">
          Targeted Investor IRR
        </span>
        <b className="card-item__value">
          {targetedInvestorIrr}
        </b>
      </div>

      <div className="card-info__card-item">
        <span className="card-item__title">
          Targeted Equity Multiple
        </span>
        <b className="card-item__value">
          {targetedEquityMultiple}
        </b>
      </div>

      <div className="card-info__card-item">
        <span className="card-item__title">
          Targeted Avarage Cash Yield
        </span>
        <b className="card-item__value">
          {targetedAvarageCashYield}
        </b>
      </div>

      <div className="card-info__card-item">
        <span className="card-item__title">
          Distribution Commencement
        </span>
        <b className="card-item__value">
          {distributionCommencement}
        </b>
      </div>

      <div className="card-info__card-item">
        <span className="card-item__title">
          Distribution Period
        </span>
        <b className="card-item__value">
          {distributionPeriod}
        </b>
      </div>
    </div>

    <Link
      className="card__card-button card-button"
      to="/deal"
    >
      Trade now
    </Link>
  </li>
);

CurrentDeal.propTypes = CurrentDealType;
