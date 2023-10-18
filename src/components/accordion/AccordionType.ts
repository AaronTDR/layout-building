import { ReactElement, ReactNode } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/* AccordionItem types */
type AccordionItemWithIcon = {
  title: string;
  cssTitle: string;
  icon: IconDefinition;
  cssIcon: string; // Required if icon is present
  rotateIcon: boolean; // Optional only if icon is added
  IsThereOpacityIcon: boolean; // Optional only if icon is added
  cssContent: string;
  expandDirection?: "up" | "down";
  children: ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
};

type AccordionItemWithoutIcon = {
  title: string;
  cssTitle: string;
  icon?: never; // Ensures that icon is not present
  cssIcon?: never; // Ensures that cssIcon is not present if icon was not added
  rotateIcon?: never; // Ensures that rotateIcon is not present if icon was not added
  IsThereOpacityIcon?: never; // Ensures that IsThereOpacityIcon is not present if icon was not added
  cssContent: string;
  expandDirection?: "up" | "down";
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
