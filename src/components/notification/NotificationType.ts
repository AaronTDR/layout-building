import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type NotificationType = {
  slipDirection: "toRightTop" | "toRightBottom" | "toLeftTop" | "toLeftBottom";
  type: "success" | "warning" | "notice" | "fail";
  css?: string;
  message: string;
  icon?: IconDefinition;
  displayDuration?: number;
  actionButton?: boolean;
  textButton?: string;
  onPressButton?: () => void;
};
