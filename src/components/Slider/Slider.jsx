import React, { useState, useEffect } from 'react';
import firstSlide from '../../images/slider-photos/photo_1.jpg';
import secondSlide from '../../images/slider-photos/photo_2.jpg';
import thirdSlide from '../../images/slider-photos/photo_3.jpg';
import './Slider.scss';

const slides = [
  <img key={firstSlide} src={firstSlide} alt="first slide" />,
  <img key={secondSlide} src={secondSlide} alt="second slide" />,
  <img key={thirdSlide} src={thirdSlide} alt="third slide" />,
];

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setActiveIndex(current => (
        current === slides.length - 1 ? 0 : current + 1
      ));
    }, 3000);

    return () => clearInterval();
  }, []);

  const prevSlideIndex = activeIndex ? activeIndex - 1 : slides.length - 1;
  const nextSlideIndex = (activeIndex === slides.length - 1)
    ? 0
    : activeIndex + 1;

  return (
    <div className="deal__slider slider">
      <div
        className="slider__slide slider__slide--prev"
        key={prevSlideIndex}
      >
        {slides[prevSlideIndex]}
      </div>
      <div
        className="slider__slide"
        key={activeIndex}
      >
        {slides[activeIndex]}
      </div>
      <div
        className="slider__slide slider__slide--next"
        key={nextSlideIndex}
      >
        {slides[nextSlideIndex]}
      </div>
    </div>
  );
};
