import React, { useState, useEffect } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import './Carousel.css';

function Carousels() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const slides = [
    {
      imageSrc: require('./image-1.jpg'),
    },
    {
      imageSrc: require('./image-2.jpg'),
    },
    {
      imageSrc: require('./image-3.jpg'),
      caption: 'Third slide label',
      description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Interval set to 5000 milliseconds (0.5 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="button-container">
        <BiLeftArrow onClick={handlePrev} className="carousel-button" />
        <div className="carousel-slide">
          <div className="image-container">
            <img
              src={slides[activeIndex].imageSrc}
              alt={`Slide ${activeIndex}`}
              style={{ width: '15rem' }}
            />
            <div className="carousel-overlay"></div>
          </div>
        </div>
        <BiRightArrow onClick={handleNext} className="carousel-button" />
      </div>
    </div>
  );
}

export default Carousels;
