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
}).isRequired;

export const CurrentDealsType = PropTypes.arrayOf(PropTypes.shape(
  CurrentDealType,
)).isRequired;

const ImagesType = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
})).isRequired;

export const SliderType = PropTypes.shape({
  images: ImagesType,
}).isRequired;

export const SlidesType = {
  slides: ImagesType,
  activeIndex: PropTypes.number.isRequired,
}.isRequired;

export const DotsType = {
  activeIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  slides: ImagesType,
}.isRequired;

export const ArrowsType = {
  prevSlide: PropTypes.func.isRequired,
  nextSlide: PropTypes.func.isRequired,
}.isRequired;
