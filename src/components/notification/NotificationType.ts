import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type NotificationType = {
  slipDirection: "toRightTop" | "toLeftTop" | "toRightBottom" | "toLeftBottom";
  type: "success" | "warning" | "notice" | "fail";
  css?: string;
  message: string;
  icon?: IconDefinition;
  displayDuration?: number;
  actionButton?: boolean;
  textButton?: string;
  onAction?: () => void;
};
