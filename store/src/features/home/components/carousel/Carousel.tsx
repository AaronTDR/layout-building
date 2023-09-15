import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
/* components */
import Icon from "../../../../components/icon/Icon";
import { getCarouselImages } from "../../services/getCarouselImages/getCarouselImages";
import banner1 from "../../../../assets/carousel/carouselBanners/banner-1.webp";
import banner2 from "../../../../assets/carousel/carouselBanners/banner-2.webp";
/* types */
import { CarouselImageType } from "./CarouselType";
/* styles */
import carouselStyles from "./carousel.module.css";

const Carousel = () => {
  const [images, setImages] = useState<CarouselImageType[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  /* In a breakpoint greater than 768px shows the banners section */
  const [width, setWidth] = useState(window.innerWidth);
  const autoChangeInterval = 4000; // Automatic change time
  const timerRef = useRef(null);

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
  }, []);
  /* It will run every time the current image changes
  reset timer for automatic switching */
  useEffect(() => {
    if (images.length > 0) {
      // Start the autoChange logic only when images are available
      const startAutoChange = () => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }

        timerRef.current = setInterval(() => {
          handleNextClick();
        }, autoChangeInterval);
      };

      startAutoChange();

      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      };
    }
  }, [images]);

  const carouselContain = images.map((img, i) => {
    /* Determines the size of the carousel image */
    let sizeImage: keyof CarouselImageType;
    if (width <= 480) {
      sizeImage = "small";
    } else if (width <= 768) {
      sizeImage = "medium";
    } else {
      sizeImage = "large";
    }
    return (
      <img
        key={i}
        src={img[sizeImage]}
        alt={`Slide ${i + 1}`}
        className={carouselStyles.img}
      />
    );
  });

  // Handles carousel point pagination
  const handlePaginationClick = (index: number) => {
    // Stop timer when user interacts manually
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setCurrentImageIndex(index);
  };

  const handlePrevClick = () => {
    // Stop timer when user interacts manually
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = (e) => {
    // Stop timer when user interacts manually
    if (e && timerRef.current) {
      clearInterval(timerRef.current);
    }

    setCurrentImageIndex((prevIndex) => {
      return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
    });
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
              type="button"
              className={carouselStyles.prevButton}
              onClick={handlePrevClick}
            >
              <Icon icon={faChevronLeft} css={carouselStyles.buttonIcon} />
            </button>
            <button
              type="button"
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
