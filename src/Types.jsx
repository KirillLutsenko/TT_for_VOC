import PropTypes from 'prop-types';

export const CurrentDealType = PropTypes.shape({
  mainTitle: PropTypes.string.isRequired,
  availableShares: PropTypes.string.isRequired,
  shareholder: PropTypes.string.isRequired,
  targetedInvestorIrr: PropTypes.string.isRequired,
  targetedEquityMultiple: PropTypes.string.isRequired,
  targetedAvarageCashYield: PropTypes.string.isRequired,
  distributionCommencement: PropTypes.string.isRequired,
  distributionPeriod: PropTypes.string.isRequired,
});

export const CurrentDealsType = PropTypes.arrayOf(PropTypes.shape(
  CurrentDealType,
)).isRequired;
