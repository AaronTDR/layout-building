import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type BaseNotificationType = {
  slipDirection: "toRightTop" | "toRightBottom" | "toLeftTop" | "toLeftBottom";
  type: "success" | "warning" | "notice" | "fail";
  css?: string;
  message: string;
  icon?: IconDefinition;
  displayDuration?: number;
};

type NotificationWithButton = BaseNotificationType & {
  actionButton: true;
  textButton: string;
  onPressButton: () => void;
};

type NotificationWithoutButton = BaseNotificationType & {
  actionButton?: false;
  textButton?: never;
  onPressButton?: never;
};

export type NotificationType =
  | NotificationWithButton
  | NotificationWithoutButton;
