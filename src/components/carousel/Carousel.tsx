import { useState, MouseEvent, CSSProperties } from "react";
import { Link } from "react-router-dom";
import { SwipeEventData, useSwipeable } from "react-swipeable";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

/* components */
import Icon from "../../components/icon/Icon";

/* styles */
import carouselStyles from "./carouselStyles.module.css";

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
const Carousel = ({ id, images }: { id: string; images: string[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  /* Item by ID path */
  const itemByIdPath = `https://api.mercadolibre.com/items/${id}/`;

  // Handles carousel point pagination
  const handlePaginationClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = (e?: MouseEvent | SwipeEventData) => {
    setCurrentImageIndex((prevIndex) => {
      return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const carouselContent = images.map((img, i) => {
    return (
      <Link key={i} to={itemByIdPath}>
        <div className={carouselStyles.test}>
          <img
            src={img.url}
            alt={`Slide ${i + 1}`}
            className={carouselStyles.img}
          />
        </div>
      </Link>
    );
  });

  const handlers = useSwipeable({
    onSwipedLeft: handleNextClick,
    onSwipedRight: handlePrevClick,
  });

  const changingContentStyles = {
    transform: `translateX(${currentImageIndex * -(100 / images.length)}%)`,
    width: `${images.length}00%`,
  };
  return (
    <div className={carouselStyles.container}>
      <div {...handlers} className={carouselStyles.carousel}>
        <div style={changingContentStyles} className={carouselStyles.content}>
          {carouselContent}
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
          <>
            {/* These buttons will be visible on PC but hidden on Android and iPhone. */}
            <button
              type="button"
              style={isButtonVisible}
              className={carouselStyles.prevButton}
              onClick={handlePrevClick}
            >
              <Icon icon={faChevronLeft} css={carouselStyles.buttonIcon} />
            </button>

            <button
              type="button"
              style={isButtonVisible}
              className={carouselStyles.nextButton}
              onClick={handleNextClick}
            >
              <Icon icon={faChevronRight} css={carouselStyles.buttonIcon} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Carousel;
