import { ReactElement, ReactNode } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/* AccordionItem types */
type AccordionItemWithIcon = {
  title: string;
  cssTitle: string;
  icon: IconDefinition;
  cssIcon: string; // Required if icon is present
  cssContent: string;
  expandDirection: "up" | "down";
  children: ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
};

type AccordionItemWithoutIcon = {
  title: string;
  cssTitle: string;
  icon?: never; // Ensures that icon is not present
  cssIcon?: never; // Ensures that cssIcon is not present
  cssContent: string;
  expandDirection: "up" | "down";
  children: ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
};

export type AccordionItemType =
  | AccordionItemWithIcon
  | AccordionItemWithoutIcon;

/* Accordion types */
type AccordionChildrenType =
  | ReactElement<AccordionItemType>
  | ReactElement<AccordionItemType>[];

export type AccordionType = {
  cssAccordionContainer: string;
  children: AccordionChildrenType;
};
