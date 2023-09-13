import { useState, useEffect, useRef } from "react";
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
  /* In a breakpoint greater than 768px shows the banners section */
  const [width, setWidth] = useState(window.innerWidth);
  // const [carouselWidth, setCarouselWidth] = useState(null);
  // const [containWidth, setContainWidth] = useState(null);

  // const [imgWidth, setImgWidth] = useState(null);

  // const carouselRef = useRef(null);
  /* Manage the screen size to display the banners section */
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  /* Gets the carousel images */
  useEffect(() => {
    const response = getCarouselImages();
    setImages(response);
  }, [currentImageIndex]);

  const carouselContain = images.map((img, i) => (
    <img
      key={i}
      src={img?.large}
      alt={`Slide ${i + 1}`}
      className={carouselStyles.img}
    />
  ));

  /* returns the percentage to be calculated of (percentage of quantity) = multiplier * (percentage/100) * quantity = R
   */
  /*   const calcWidth = (percentage, quantity, multiplier) => {
    return (percentage / 100) * quantity * multiplier;
  }; */

  /* Handles the current carousel width */
  /*   useEffect(() => {
    function handleResize() {
      const carouselWidth = carouselRef?.current?.offsetWidth;
      console.log(
        "🚀 ~ file: Carousel.tsx:55 ~ handleResize ~ carouselWidth:",
        carouselWidth
      );

      setContainWidth(calcWidth(65, carouselWidth, images.length));
      const widthImg =
        calcWidth(65, carouselWidth, images.length) / images.length;
      setImgWidth(widthImg);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); */

  // Handles carousel point pagination
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

  const translateX = {
    transform: `translateX(${currentImageIndex * -14.285714}%)`,
  };

  return (
    <div className={carouselStyles.container}>
      <div {...handlers} className={carouselStyles.carousel}>
        <div style={translateX} className={carouselStyles.contain}>
          {carouselContain}
        </div>
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
