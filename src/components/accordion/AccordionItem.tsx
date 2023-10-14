import { useRef, CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Icon from "../icon/Icon";
/* types */
import { AccordionItemType } from "./AccordionType";
/* styles */
import accordionStyles from "./accordionStyles.module.css";

// Component of an individual accordion element
/* El componente AccordionItem representa un elemento individual dentro del Acordeón.
No es necesario proporcionar manualmente las propiedades isOpen y onClick, ya que se inyectan automáticamente con la función cloneElement de React dentro del componente Accordion. */
const AccordionItem = ({
  title,
  cssTitle,
  icon,
  cssIcon,
  cssContent,
  expandDirection,
  isOpen,
  onClick,
  children,
}: AccordionItemType) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  // We set the style of the accordion element to control its height
  const dropDownStyles: CSSProperties = {
    overflow: "hidden",
    transition: "max-height 0.3s ease",
    background: "#FFFFFF",
    zIndex: 910,
    maxHeight: isOpen
      ? contentRef.current
        ? contentRef.current.scrollHeight + "px" //Open: full height of content
        : "auto"
      : 0, // Closed: zero height
  };
  /* If you choose "expandDirection" "down", the content is displayed below the title, while "expandDirection" "up" will display the title positioned below the content. */
  return expandDirection === "down" ? (
    /* Section down */
    <>
      <div onClick={onClick} className={accordionStyles.titleContainerItem}>
        <h3 className={cssTitle}>{title}</h3>
        {icon && (
          <i className={cssIcon}>
            <FontAwesomeIcon icon={icon} />
          </i>
        )}
      </div>
      <div style={dropDownStyles}>
        <div ref={contentRef} className={cssContent}>
          {children}
        </div>
      </div>
    </>
  ) : (
    /* Section up */
    <>
      <div style={dropDownStyles}>
        <div ref={contentRef} className={cssContent}>
          {children}
        </div>
      </div>
      <div onClick={onClick} className={accordionStyles.titleContainerItem}>
        <h3 className={cssTitle}>{title}</h3>
        {icon && (
          <i className={cssIcon}>
            <FontAwesomeIcon icon={icon} />
          </i>
        )}
      </div>
    </>
  );
};

export default AccordionItem;
