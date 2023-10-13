import { ReactElement, ReactNode } from "react";
/* AccordionItem types */
export type AccordionItemType = {
  title: string;
  cssTitle: string;
  cssContent: string;
  children: ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
};

/* Accordion types */
type AccordionChildrenType =
  | ReactElement<AccordionItemType>
  | ReactElement<AccordionItemType>[];

export type AccordionType = {
  cssAccordionContainer: string;
  children: AccordionChildrenType;
};
