import { useRef, CSSProperties } from "react";
/* types */
import { AccordionItemType } from "./AccordionType";

// Component of an individual accordion element
/* El componente AccordionItem representa un elemento individual dentro del Acordeón.
No es necesario proporcionar manualmente las propiedades isOpen y onClick, ya que se inyectan automáticamente con la función cloneElement de React dentro del componente Accordion. */
const AccordionItem = ({
  title,
  isOpen,
  onClick,
  cssTitle,
  cssContent,
  children,
}: AccordionItemType) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  // We set the style of the accordion element to control its height
  const accordionStyles: CSSProperties = {
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
