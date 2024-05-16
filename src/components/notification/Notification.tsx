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
  actionButton,
  textButton,
  onPressButton,
}: NotificationType) => {
  const [isVisible, setIsVisible] = useState(true);
  const [translate, setTranslate] = useState({
    translateX: "",
    translateY: "",
  });
  // Notification state when exiting the screen
  const [isExiting, setIsExiting] = useState(false);

  /* Notification slide direction*/
  useEffect(() => {
    if (isVisible) {
      if (slipDirection === "toRightTop") {
        setTranslate((prev) => ({
          ...prev,
          translateX: styles.slideInFromLeftTop,
          translateY: styles.containerTop,
        }));
      } else if (slipDirection === "toLeftTop") {
        setTranslate((prev) => ({
          ...prev,
          translateX: styles.slideInFromRightTop,
          translateY: styles.containerTop,
        }));
      } else if (slipDirection === "toRightBottom") {
        setTranslate((prev) => ({
          ...prev,
          translateX: styles.slideInFromLeftBottom,
          translateY: styles.containerBottom,
        }));
      } else if (slipDirection === "toLeftBottom") {
        setTranslate((prev) => ({
          ...prev,
          translateX: styles.slideInFromRightBottom,
          translateY: styles.containerBottom,
        }));
      } else {
        setTranslate((prev) => ({
          ...prev,
          translateX: styles.slideInFromRightTop,
        }));
      }
    } else if (isExiting) {
      if (slipDirection === "toRightTop") {
        setTranslate((prev) => ({
          ...prev,
          translateX: styles.slideOutToLeftTop,
          translateY: styles.containerTop,
        }));
      } else if (slipDirection === "toLeftTop") {
        setTranslate((prev) => ({
          ...prev,
          translateX: styles.slideOutToRightTop,
          translateY: styles.containerTop,
        }));
      } else if (slipDirection === "toRightBottom") {
        setTranslate((prev) => ({
          ...prev,
          translateX: styles.slideOutToLeftBottom,
          translateY: styles.containerBottom,
        }));
      } else if (slipDirection === "toLeftBottom") {
        setTranslate((prev) => ({
          ...prev,
          translateX: styles.slideOutToRightBottom,
          translateY: styles.containerBottom,
        }));
      } else {
        setTranslate((prev) => ({
          ...prev,
          translateX: styles.slideInFromRightTop,
        }));
      }

      // Hide the element before the animation ends
      const timer = setTimeout(() => {
        setIsExiting(false);
      }, 130); // Allow the return animation to occur, but hide the element before the animation ends to prevent the notification from being displayed again.
      return () => clearTimeout(timer);
    }
  }, [isVisible, isExiting, slipDirection]);

  // Remove notification if 'displayDuration' is passed
  useEffect(() => {
    if (displayDuration && isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setIsExiting(true);
      }, displayDuration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [displayDuration, isVisible]);

  // Notification icon
  let iconType;

  // Notification style
  let notificationTypeStyle;
  let iconTypeStyle;
  let buttonHover;

  /* Type of notification */
  if (type === "success") {
    iconType = icon || faCheck;
    notificationTypeStyle = styles.successContent;
    iconTypeStyle = styles.successIcon;
    buttonHover = styles.successButtonHover;
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

  const wrapperStyles = `${styles.wrapper} ${notificationTypeStyle} ${
    css ? css : ""
  }`;

  const handleClose = () => {
    setIsVisible(false);
    setIsExiting(true);
  };

  return (
    <div
      className={`${styles.container} ${translate.translateY} ${
        !isVisible && !isExiting ? styles.hidden : ""
      }`}
    >
      <div className={`${wrapperStyles} ${translate.translateX}`}>
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
            onClick={onPressButton}
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
