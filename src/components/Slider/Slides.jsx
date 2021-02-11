import React from 'react';
import { SlidesType } from '../../Types';

export const Slides = ({ slides, activeIndex }) => (
  <div>
    {slides.map((slide, index) => (
      <div
        key={slide.id}
        className={index === activeIndex
          ? 'slider__slides slides active'
          : 'slides inactive'
        }
      >
        <img
          className="slides__slide"
          src={slide.url}
          alt={slide.description}
        />
      </div>
    ))}
  </div>
);

Slides.propTypes = SlidesType;
