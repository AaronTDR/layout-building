import { useState, Children, cloneElement } from "react";
/* types */
import { AccordionType } from "./AccordionType";

// Accordion component that controls state and interaction
/* The Accordion component is the main container of the Accordion, it automatically handles the opening and closing state of the Accordion elements. You must provide one or more AccordionItem elements as children of this component. */
const Accordion = ({ cssAccordionContainer, children }: AccordionType) => {
  const [openIndex, setOpenIndex] = useState(-1);

  // Handles clicking on an accordion element
  const handleItemClick = (index: number) => {
    // If the element is already open, close it
    if (index === openIndex) {
      setOpenIndex(-1);
    } else {
      // If the element is closed or different from the current one, open it
      setOpenIndex(index);
    }
  };

  return (
    <div className={cssAccordionContainer}>
      {Children.map(children, (child, i) => {
        return cloneElement(child, {
          // Sets whether this accordion element is open or closed
          isOpen: i === openIndex,
          onClick: () => handleItemClick(i), // Provides click handling function
        });
      })}
    </div>
  );
};

export default Accordion;
