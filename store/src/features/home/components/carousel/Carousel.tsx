import { useState, useEffect } from "react";

import { getCarouselImages } from "../../services/getCarouselImages/getCarouselImages";

import carouselStyles from "./carousel.module.css";

const Carousel = () => {
  const [images, setImages] = useState([]);
  console.log("🚀 ~ file: Carousel.tsx:9 ~ Carousel ~ images:", images);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const response = getCarouselImages();
    setImages(response);
  }, [currentImageIndex]);

  const handlePaginationClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={carouselStyles.carousel}>
      <div className={carouselStyles.container}>
        <img
          className={carouselStyles.img}
          src={images[currentImageIndex]?.large}
          alt={`Slide ${currentImageIndex}`}
        />
        {images.length > 1 && (
          <div className={carouselStyles.pagination}>
            {images.map((_, index) => (
              <div
                key={index}
                className={`${carouselStyles.paginationDot} ${
                  index === currentImageIndex ? carouselStyles.active : ""
                }`}
                onClick={() => handlePaginationClick(index)}
              ></div>
            ))}
          </div>
        )}
        {images.length > 1 && (
          <div className={carouselStyles.carouselButtons}>
            <button className="prev-button" onClick={handlePrevClick}>
              &lt;
            </button>
            <button className="next-button" onClick={handleNextClick}>
              &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
