import { useState, useEffect } from "react";

export const useInfiniteScroll = (
  isMobile: boolean,
  maxOffsetAllowed: number,
  offset: number
) => {
  // States for infinite scroll
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  useEffect(() => {
    if (isMobile) {
      const onScroll = () => {
        const scrollPos = window.scrollY;
        const scrollOffset = 500;
        const scrolled =
          window.innerHeight + scrollPos >=
          document.documentElement.offsetHeight - (footerHeight + scrollOffset);

        // Determine scroll direction
        const direction = scrollPos > prevScrollPos ? "down" : "up";

        setScrolledToBottom(
          scrolled && direction === "down" && offset <= maxOffsetAllowed
        );
        setPrevScrollPos(scrollPos);
      };

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [footerHeight, prevScrollPos]);

  useEffect(() => {
    if (isMobile) {
      // Get the footer element
      const footer = document.querySelector("footer");

      // Get the height of the footer
      const height = footer?.offsetHeight;

      // Update the state with the height of the footer
      height && setFooterHeight(height);
    }
  }, []);

  return scrolledToBottom;
};
