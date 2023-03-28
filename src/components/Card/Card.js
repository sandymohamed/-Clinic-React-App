import React, { useState } from "react";
import "./Card.scss";

const Card = (props) => {
  const { title, description, imageUrls } = props;
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    const previousSlide = currentSlide === 0 ? imageUrls.length - 1 : currentSlide - 1;
    setCurrentSlide(previousSlide);
  };

  const handleNextClick = () => {
    const nextSlide = currentSlide === imageUrls.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(nextSlide);
  };

  return (
    <div className="card">
      <div className="slider">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={title}
            className={index === currentSlide ? "active" : ""}
          />
        ))}
        <button className="prev" style={{display: imageUrls.length > 1? 'block' : 'none'}} onClick={handlePrevClick}>
          &#8250;
        </button>
        <button className="next" style={{display: imageUrls.length > 1? 'block' : 'none'}} onClick={handleNextClick}>
          &#8249;
        </button>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
