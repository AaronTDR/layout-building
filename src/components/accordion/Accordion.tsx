import React, { useState } from "react";
/* types */
import { AccordionType } from "./AccordionType";

const Accordion = ({ cssAccordionContainer, children }: AccordionType) => {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleItemClick = (index: number) => {
    if (index === openIndex) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className={cssAccordionContainer}>
      {React.Children.map(children, (child, i) => {
        return React.cloneElement(child, {
          isOpen: i === openIndex,
          onClick: () => handleItemClick(i),
        });
      })}
    </div>
  );
};

export default Accordion;
