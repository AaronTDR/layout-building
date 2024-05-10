import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type NotificationType = {
  slipDirection: "toRightTop" | "toLeftTop" | "toRightBottom" | "toLeftBottom";
  type: "success" | "warning" | "notice" | "other";
  css?: string;
  message: string;
  icon?: IconDefinition;
  displayDuration?: number;
  closeButton?: boolean;
  actionButton?: boolean;
  textButton?: string;
  onAction?: () => void;
};
