import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Icon from "../../../../components/icon/Icon";

import { getCarouselImages } from "../../services/getCarouselImages/getCarouselImages";
import banner1 from "../../../../assets/carousel/carouselBanners/banner-1.webp";
import banner2 from "../../../../assets/carousel/carouselBanners/banner-2.webp";

import carouselStyles from "./carousel.module.css";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const handlers = useSwipeable({
    onSwipedLeft: handleNextClick,
    onSwipedRight: handlePrevClick,
  });

  return (
    <div className={carouselStyles.carousel}>
      <div {...handlers} className={carouselStyles.container}>
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
          <div className={carouselStyles.buttons}>
            <button
              className={carouselStyles.prevButton}
              onClick={handlePrevClick}
            >
              <Icon icon={faChevronLeft} css={carouselStyles.buttonIcon} />
            </button>
            <button
              className={carouselStyles.nextButton}
              onClick={handleNextClick}
            >
              <Icon icon={faChevronRight} css={carouselStyles.buttonIcon} />
            </button>
          </div>
        )}
      </div>
      {width > 768 && (
        <div className={carouselStyles.bannerSection}>
          <div className={carouselStyles.bannerContainer}>
            <Link to={"#"}>
              <img
                src={banner1}
                alt="Banner"
                className={carouselStyles.bannerImg}
              />
            </Link>
          </div>
          <div className={carouselStyles.bannerContainer}>
            <Link to={"#"}>
              <img
                src={banner2}
                alt="Banner"
                className={carouselStyles.bannerImg}
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
