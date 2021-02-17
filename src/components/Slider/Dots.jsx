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
        onClick={() => onClick(index)}
        role="presentation"
      />
    ))}
  </div>
);

Dots.propTypes = DotsType;
