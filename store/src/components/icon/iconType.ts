import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type IconType = {
  icon: IconDefinition & IconType;
  css: string;
};
