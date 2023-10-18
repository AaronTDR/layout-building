import { useState, useRef, CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* types */
import { AccordionItemType } from "./AccordionType";
/* styles */
import accordionStyles from "./accordionStyles.module.css";

// * Component of an individual accordion element:
/*
* -The AccordionItem component represents an individual element within the Accordion.
* -You don't need to manually provide the "isOpen" and "onClick" properties, as they are automatically injected using React's cloneElement function within the Accordion component.
* -The "icon" (optional): Icon displayed to the right of the accordion title. Possible value: IconDefinition. Type: "IconDefinition property - @fortawesome". If added, the ["cssIcon"] and ["rotateIcon"] properties will be required.
* -"rotateIcon"(optional, only if icon is added): Adds a 180-degree rotation to the icon when the accordion's content is displayed. Possible values: true or false. Default value false.
* -"IsThereOpacityIcon" (optional, only if icon is added): Adds an opacity effect of 1 when the accordion title is clicked and 0.6 when it's released. Possible values: true or false. Default value false.
* -"expandDirection" (optional): The direction in which the accordion content expands. Possible values: "up" or "down". Its default value: "down."

*/
const AccordionItem = ({
  title,
  cssTitle,
  icon,
  cssIcon,
  rotateIcon, //If true, a 180-degree rotation is added to the icon when the accordion contents are opened.
  IsThereOpacityIcon, // If true, Add an opacity effect when you press the icon.
  cssContent,
  expandDirection,
  isOpen,
  onClick,
  children,
}: AccordionItemType) => {
  /* Style Status Opacity */
  const [IsOpacityActive, setIsOpacityActive] = useState(false);

  const contentRef = useRef<HTMLDivElement | null>(null);

  // We set the style of the accordion element to control its height
  const dropDownStyles: CSSProperties = {
    overflow: "hidden",
    transition: "max-height 0.3s ease",
    background: "#FFFFFF",
    zIndex: 910,
    maxHeight: isOpen
      ? contentRef.current
        ? contentRef.current.scrollHeight + "px" //Open: full height of content
        : "auto"
      : 0, // Closed: zero height
  };
  /* If icon exists, check if rotateIcon is true to add the rotation transformation or not */
  const rotateStyles = {
    transition: icon ? (rotateIcon ? "transform 0.2s ease" : "") : "",
    transform: icon
      ? rotateIcon
        ? isOpen
          ? "rotate(180deg)"
          : "rotate(0deg)"
        : ""
      : "",
  };

  /* If icon is not added, it ensures that the opacity handlers are not executed */
  const isThereIconAndOpacity = icon && IsThereOpacityIcon;

  const OpacityStyles = {
    opacity: IsOpacityActive ? 1 : 0.6,
  };

  /* Local Component Styles */
  const localStyles = { ...rotateStyles, ...OpacityStyles };

  const handleActiveOpacity = () => setIsOpacityActive(true);

  const handleDisableOpacity = () => setIsOpacityActive(false);

  /* If you choose "expandDirection" "down", the content is displayed below the title, while "expandDirection" "up" will display the title positioned below the content. */
  return expandDirection === "up" ? (
    /* Section shows the accordion upwards */
    <>
      <div style={dropDownStyles}>
        <div ref={contentRef} className={cssContent}>
          {children}
        </div>
      </div>
      <div
        onClick={onClick}
        onTouchStart={isThereIconAndOpacity ? handleActiveOpacity : undefined}
        onTouchEnd={isThereIconAndOpacity ? handleDisableOpacity : undefined}
        onMouseDown={isThereIconAndOpacity ? handleActiveOpacity : undefined}
        onMouseUp={isThereIconAndOpacity ? handleDisableOpacity : undefined}
        className={accordionStyles.titleContainerItem}
      >
        <h3 className={cssTitle}>{title}</h3>
        {icon && (
          <i className={cssIcon} style={localStyles}>
            <FontAwesomeIcon icon={icon} />
          </i>
        )}
      </div>
    </>
  ) : (
    /* Section Shows the Accordion Down */
    <>
      <div
        onClick={onClick}
        onTouchStart={isThereIconAndOpacity ? handleActiveOpacity : undefined}
        onTouchEnd={isThereIconAndOpacity ? handleDisableOpacity : undefined}
        onMouseDown={isThereIconAndOpacity ? handleActiveOpacity : undefined}
        onMouseUp={isThereIconAndOpacity ? handleDisableOpacity : undefined}
        className={accordionStyles.titleContainerItem}
      >
        <h3 className={cssTitle}>{title}</h3>
        {icon && (
          <i className={cssIcon} style={localStyles}>
            <FontAwesomeIcon icon={icon} />
          </i>
        )}
      </div>
      <div style={dropDownStyles}>
        <div ref={contentRef} className={cssContent}>
          {children}
        </div>
      </div>
    </>
  );
};

AccordionItem.defaultProps = {
  rotateIcon: false,
  IsThereOpacityIcon: false,
  expandDirection: "down",
};

export default AccordionItem;
