import { useEffect, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
  closeButton,
  actionButton,
  textButton,
  onAction,
}: NotificationType) => {
  const [isVisible, setIsVisible] = useState(true);

  let translateX;
  let translateY;
  let notificationType;
  let typeIcon;

  /* Notification slide direction*/
  if (slipDirection === "toRightTop") {
    translateY = styles.wrapperTop;
    translateX = styles.slideInFromLeftTop;
  } else if (slipDirection === "toLeftTop") {
    translateY = styles.wrapperTop;
    translateX = styles.slideInFromRightTop;
  } else if (slipDirection === "toRightBottom") {
    translateY = styles.wrapperBottom;
    translateX = styles.slideInFromLeftBottom;
  } else if (slipDirection === "toLeftBottom") {
    translateY = styles.wrapperBottom;
    translateX = styles.slideInFromRightBottom;
  } else {
    translateX = styles.slideInFromRightTop;
  }

  if (type === "success") {
    /* Type of notification */
    notificationType = styles.success;
  } else if (type === "warning") {
    notificationType = styles.warning;
  } else if (type === "notice") {
    notificationType = styles.notice;
  } else if (type === "other") {
    notificationType = styles.other;
  } else {
    notificationType = "";
  }

  const wrapperStyles = `${styles.wrapper} ${translateY}`;
  let containerStyles = `${styles.container} ${notificationType} ${
    css ? css : ""
  }`;

  containerStyles += " " + translateX;

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
    <div className={wrapperStyles}>
      <div className={containerStyles}>
        {icon && (
          <div className={styles.iconMessageContainer}>
            <Icon icon={icon || typeIcon} css={styles.iconMessage} />
          </div>
        )}
        <div className={styles.content}>
          <div className={styles.messageContainer}>
            <div className={styles.message}>{message}</div>
            {closeButton && (
              <div
                onClick={handleClose}
                className={styles.closeButtonContainer}
              >
                <div className={styles.closeIconContent}>
                  <Icon icon={faXmark} css={styles.closeIcon} />
                </div>
              </div>
            )}
          </div>
          {actionButton && (
            <button
              type="button"
              onClick={onAction}
              className={styles.actionButton}
            >
              {textButton}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notification;
