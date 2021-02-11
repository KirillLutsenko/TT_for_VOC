/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { DotsType } from '../../Types';

export const Dots = ({ activeIndex, onClick, slides }) => (
  <div className="slider__dots dots">
    {slides.map((slide, index) => (
      <span
        key={slide.id}
        className={`${activeIndex === index
          ? 'dots__dot dot active-dot'
          : 'dots__dot dot'}`
        }
        onClick={event => onClick((event.target.value = index))}
      />
    ))}
  </div>
);

Dots.propTypes = DotsType;
