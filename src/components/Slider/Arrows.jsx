/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { ArrowsType } from '../../Types';

export const Arrows = ({ prevSlide, nextSlide }) => (
  <div className="slider__arrows arrows">
    <span
      className="arrows__prev"
      onClick={prevSlide}
    >
      &#10094;
    </span>

    <span
      className="arrows__next"
      onClick={nextSlide}
    >
      &#10095;
    </span>
  </div>
);

Arrows.propTypes = ArrowsType;
