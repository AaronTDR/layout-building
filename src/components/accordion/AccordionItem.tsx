import React, { useRef } from "react";

const AccordionItem = ({
  title,
  isOpen,
  onClick,
  cssTitle,
  cssContent,
  children,
}) => {
  const contentRef = useRef(null);

  const accordionStyles = {
    overflow: "hidden",
    transition: "max-height 0.3s ease",
    background: "#FFFFFF",
    zIndex: 910,
    maxHeight: isOpen
      ? contentRef.current
        ? contentRef.current.scrollHeight + "px"
        : "auto"
      : 0,
  };
  return (
    <>
      <h3 onClick={onClick} className={cssTitle}>
        {title}
      </h3>
      <div style={accordionStyles}>
        <div ref={contentRef} className={cssContent}>
          {children}
        </div>
      </div>
    </>
  );
};

export default AccordionItem;
