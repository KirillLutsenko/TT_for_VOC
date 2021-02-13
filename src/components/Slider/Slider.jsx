import React, { useState, useEffect } from 'react';
import { Arrows } from './Arrows';
import { Dots } from './Dots';
import { Slides } from './Slides';
import { SliderType } from '../../Types';
import './Slider.scss';

export const Slider = ({ deal }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = deal.images;
  const length = slides.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === length ? 0 : activeIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, length]);

  return (
    <div className="deal-menu__slider slider">
      <Slides
        activeIndex={activeIndex}
        slides={slides}
      />
      <Arrows
        prevSlide={() => setActiveIndex(activeIndex < 1
          ? length
          : activeIndex - 1)
        }
        nextSlide={() => setActiveIndex(activeIndex === length
          ? 0
          : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        onClick={actIndex => setActiveIndex(actIndex)}
        slides={slides}
      />
    </div>
  );
};

Slider.propTypes = SliderType;
