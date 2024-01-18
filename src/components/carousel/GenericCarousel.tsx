import { useState, MouseEvent, CSSProperties } from "react";
import { Link } from "react-router-dom";
import { SwipeEventData, useSwipeable } from "react-swipeable";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

/* components */
import Icon from "../icon/Icon";

/* styles */
import styles from "./styles.module.css";

/* Check your device type to decide to add the prev and next buttons to the carousel */
const userAgent = navigator.userAgent;
const isAndroid = userAgent.match(/Android/i); // Check if the user is on an Android device
const isiPhone = userAgent.match(/iPhone/i); // Check if the user is on an iPhone device
const onMobileDevice = isAndroid || isiPhone;
const isButtonVisible: CSSProperties = {
  visibility: onMobileDevice ? "hidden" : "visible",
};

/*
* Description
GenericCarousel display a collection of images in a carousel format, allowing users to navigate through them interactively.

* Properties
id (string): A unique identifier associated with the carousel. This identifier is used to construct the URL for elements related to each image in the carousel.

images (array of strings): An array containing the URLs of the images to be displayed in the carousel.

* State
currentImageIndex (number): Index of the currently visible image in the carousel.

* Methods
handlePaginationClick(index: number): Changes the current image by clicking on a pagination dot.

handlePrevClick(): Changes to the previous image in the carousel.

handleNextClick(e?: MouseEvent | SwipeEventData): Changes to the next image in the carousel. This method can also receive an optional event, which is useful when handling swipe events on touch devices.

Component Structure
The component is structured as follows:

Link to Item: Each image is a link to a specific item identified by id.

Swipe Handling: Uses the react-swipeable library to enable touch swipe on mobile devices.

Dynamic Content: The internal structure of the carousel dynamically adapts based on the number of provided images.

Pagination: If there is more than one image, pagination dots are included to show the current position in the carousel.

Navigation Buttons: Buttons to navigate to the previous and next images are included. These buttons are visible only on desktop devices.

* Styles
The component uses CSS classes defined in external style files (styles.container, styles.carousel, styles.content, etc.) to apply specific styles. Make sure these classes are defined in your application or provide custom styles as needed.

*/

const GenericCarousel = ({ id, images }: { id: string; images: string[] }) => {
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
      <Link
        key={i}
        to={itemByIdPath}
        className={styles.imgLink}
        style={{ width: `${100 / images.length}%` }}
      >
        <img src={img.url} alt={`Slide ${i + 1}`} className={styles.img} />
      </Link>
    );
  });

  const handlers = useSwipeable({
    onSwipedLeft: handleNextClick,
    onSwipedRight: handlePrevClick,
  });

  const changingContentStyles = {
    width: `${images.length}00%`,
    transform: `translateX(${currentImageIndex * -(100 / images.length)}%)`,
  };
  return (
    <div className={styles.container}>
      <div {...handlers} className={styles.carousel}>
        <div style={changingContentStyles} className={styles.content}>
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
    </div>
  );
};

export default GenericCarousel;
