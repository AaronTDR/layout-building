import { useEffect, useState } from "react";
import {
  faXmark,
  faCheck,
  faTriangleExclamation,
  faBell,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";

/* Components */
import Icon from "../../components/icon/Icon";

/* Styles */
import styles from "./notification.module.css";

/* Types */
import { NotificationType } from "./NotificationType";

const Notification = ({
  slipDirection,
  css,
  type,
  message,
  icon,
  displayDuration,
  // closeButton,
  actionButton,
  textButton,
  onAction,
}: NotificationType) => {
  const [isVisible, setIsVisible] = useState(true);

  // Notification icon
  let iconType;

  // Positioning
  let translateX;
  let translateY;

  // Notification style
  let notificationTypeStyle;
  let iconTypeStyle;
  let buttonHover;

  /* Notification slide direction*/
  if (slipDirection === "toRightTop") {
    translateY = styles.containerTop;
    translateX = styles.slideInFromLeftTop;
  } else if (slipDirection === "toLeftTop") {
    translateY = styles.containerTop;
    translateX = styles.slideInFromRightTop;
  } else if (slipDirection === "toRightBottom") {
    translateY = styles.containerBottom;
    translateX = styles.slideInFromLeftBottom;
  } else if (slipDirection === "toLeftBottom") {
    translateY = styles.containerBottom;
    translateX = styles.slideInFromRightBottom;
  } else {
    translateX = styles.slideInFromRightTop;
  }

  if (type === "success") {
    /* Type of notification */
    iconType = icon || faCheck;
    notificationTypeStyle = styles.successContent;
    iconTypeStyle = styles.successIcon;
    buttonHover = styles.successButtonHover;
    // setIconType(faCheck);
  } else if (type === "warning") {
    iconType = icon || faTriangleExclamation;
    notificationTypeStyle = styles.warningContent;
    iconTypeStyle = styles.warningIcon;
    buttonHover = styles.warningButtonHover;
  } else if (type === "notice") {
    iconType = icon || faBell;
    notificationTypeStyle = styles.noticeContent;
    iconTypeStyle = styles.noticeIcon;
    buttonHover = styles.noticeButtonHover;
  } else if (type === "fail") {
    iconType = icon || faExclamation;
    notificationTypeStyle = styles.failContent;
    iconTypeStyle = styles.failIcon;
    buttonHover = styles.failButtonHover;
  } else {
    notificationTypeStyle = "";
    iconType = icon || faCheck;
  }

  const containerStyles = `${styles.container} ${translateY}`;
  let wrapperStyles = `${styles.wrapper} ${notificationTypeStyle} ${
    css ? css : ""
  }`;

  wrapperStyles += " " + translateX;

  // Remove notification if 'displayDuration' is passed
  useEffect(() => {
    if (displayDuration && isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, displayDuration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [displayDuration, isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={containerStyles}>
      <div className={wrapperStyles}>
        <div className={`${styles.iconMessageContainer} ${iconTypeStyle}`}>
          <Icon icon={iconType} css={styles.iconMessage} />
        </div>
        <div className={styles.messageContainer}>
          <div className={styles.message}>{message}</div>
        </div>
        <div
          onClick={handleClose}
          className={`${styles.closeButtonContainer} ${buttonHover}`}
        >
          <Icon icon={faXmark} css={styles.closeIcon} />
        </div>
        {actionButton && (
          <button
            type="button"
            onClick={onAction}
            className={`${styles.actionButton} ${buttonHover}`}
          >
            {textButton}
          </button>
        )}
      </div>
    </div>
  );
};

export default Notification;
