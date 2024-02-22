import { useState, useEffect, useRef, MouseEvent, CSSProperties } from "react";
import { Link } from "react-router-dom";
import { SwipeEventData, useSwipeable } from "react-swipeable";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

/* components */
import Icon from "../../../../components/icon/Icon";

/* types */
import { AdCarouselImageType } from "./AdCarouselImageType";

/* styles */
import styles from "./AdCarouselStyles.module.css";

/* services */
import { getCarouselImages } from "../../services/getCarouselImages/getCarouselImages";

/* carousel banner images */
import banner1 from "../../../../assets/carousel/carouselBanners/banner-1.webp";
import banner2 from "../../../../assets/carousel/carouselBanners/banner-2.webp";

/* Check your device type to decide to add the prev and next buttons to the carousel */
const userAgent = navigator.userAgent;
const isAndroid = userAgent.match(/Android/i); // Check if the user is on an Android device
const isiPhone = userAgent.match(/iPhone/i); // Check if the user is on an iPhone device
const onMobileDevice = isAndroid || isiPhone;
const isButtonVisible: CSSProperties = {
  visibility: onMobileDevice ? "hidden" : "visible",
};

/*
* The Carousel component displays a series of images and allows users to navigate through them automatically or manually.

* The Carousel component consists of the following features:

* Obtaining Images: When the component loads, the images to be displayed are obtained through the getCarouselImages function. Once the images have been successfully loaded, they are stored in the internal state of the component.

* Automatic Navigation: The carousel automatically switches from one image to another after a predefined time interval (by default, every 4 seconds). This is made possible by a timer configured with setInterval.

* Manual Navigation: Users can manually navigate through images using the “Previous” and “Next” navigation buttons or by clicking the pagination dots below the carousel.

* Responsiveness: The carousel adapts to different screen sizes. Images automatically adjust based on the width of the browser window.

*/
const AdCarousel = () => {
  const [images, setImages] = useState<AdCarouselImageType[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  /* In a breakpoint greater than 768px shows the banners section */
  const [width, setWidth] = useState(window.innerWidth);

  const timerRef = useRef<null | number>(null);

  const autoChangeInterval = 4000; // Automatic change time

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

  const handleNextClick = (e?: MouseEvent | SwipeEventData) => {
    // Stop timer when user interacts manually
    if (e && timerRef.current) {
      clearInterval(timerRef.current);
    }

    setCurrentImageIndex((prevIndex) => {
      return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
    });
  };

  /* Manage the screen size to display the banners section */
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Gets the carousel images */
  useEffect(() => {
    const images = getCarouselImages();
    setImages(images);
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
  }, [images.length]); // This line is maintained so that the carousel stops its automatic movement in case the user interacts with it. eslint-disable-next-line react-hooks/exhaustive-deps

  const carouselContent = images.map((img, i) => {
    /* Determines the size of the carousel image */
    let sizeImage: keyof AdCarouselImageType;
    if (width <= 480) {
      sizeImage = "small";
    } else if (width <= 768) {
      sizeImage = "medium";
    } else {
      sizeImage = "large";
    }
    return (
      <Link
        key={i}
        to={(img.path && img.path) || "#"}
        className={styles.imgLink}
      >
        <img
          src={img[sizeImage]}
          alt={`Slide ${i + 1}`}
          className={styles.img}
        />
      </Link>
    );
  });

  const handlers = useSwipeable({
    onSwipedLeft: handleNextClick,
    onSwipedRight: handlePrevClick,
  });

  const translateX = {
    transform: `translateX(${currentImageIndex * -14.285714}%)`,
  };

  return (
    <div className={styles.container}>
      <div {...handlers} className={styles.carousel}>
        <div style={translateX} className={styles.content}>
          {carouselContent}
        </div>
        {images.length > 1 && (
          <div className={styles.pagination}>
            {images.map((_, index) => (
              <div
                key={index}
                className={`${styles.paginationDot} ${
                  index === currentImageIndex ? styles.active : ""
                }`}
                onClick={() => handlePaginationClick(index)}
              ></div>
            ))}
          </div>
        )}
        {images.length > 1 && (
          <>
            {/* These buttons will be visible on PC but hidden on Android and iPhone. */}
            <button
              type="button"
              style={isButtonVisible}
              className={styles.prevButton}
              onClick={handlePrevClick}
            >
              <Icon icon={faChevronLeft} css={styles.buttonIcon} />
            </button>

            <button
              type="button"
              style={isButtonVisible}
              className={styles.nextButton}
              onClick={handleNextClick}
            >
              <Icon icon={faChevronRight} css={styles.buttonIcon} />
            </button>
          </>
        )}
      </div>
      {width > 768 && (
        <div className={styles.bannerSection}>
          <div className={styles.bannerContainer}>
            <Link to={"#"}>
              <img src={banner1} alt="Banner" className={styles.bannerImg} />
            </Link>
          </div>
          <div className={styles.bannerContainer}>
            <Link to={"#"}>
              <img src={banner2} alt="Banner" className={styles.bannerImg} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdCarousel;
