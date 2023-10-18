import { useEffect, useRef, CSSProperties } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* types */
import { DropdownMenuType } from "./DropdownMenuType";
/* styles */
import dropdownMenu from "./dropdownMenu.module.css";

/*
-If you need to separate the button from the menu, you can wrap the component in a container and add the styles to the container.
   props:
- **icon**: The name of the icon import from the @fortawesome library.
- **iconCss**: Styles for the menu icon.
- **dropdownPosition**: The position from which the menu opens and closes.
- **menuWidthPercentage**: The width of the menu in percentage in relation to the width of the screen.
- **dropdownPosition**: The side from which the menu is displayed, either left or right.
- **children**: Lists of options displayed when opening the menu.
*/
const DropdownMenu = ({
  icon,
  iconCss,
  menuWidthPercentage,
  dropdownPosition,
  children,
  state,
  setState,
}: DropdownMenuType) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  const navStyles: CSSProperties = {
    position: "fixed",
    top: 0,
    width: `${menuWidthPercentage}%`,
    height: "100%",
    overflowY: "scroll",
    transition: "all 0.3s ease",
    WebkitTransition: "all 0.3s ease",
    MozTransition: "all 0.3s ease",
    msTransition: "all 0.3s ease",
    OTransition: "all 0.3s ease",
    background: "#FFFFFF",
    zIndex: 910,
  };

  /* Calculates the position of the drop-down menu based on the dropdownPosition property.
If dropdownPosition is "right", the menu is positioned to the right, otherwise it is positioned to the left. */
  const leftOrRightPosition =
    dropdownPosition === "right"
      ? { right: `-${menuWidthPercentage}%` }
      : { left: `-${menuWidthPercentage}%` };
  /* Defines the active drop-down menu styles based on the dropdownPosition property.
If dropdownPosition is "right", active styles place the menu on the right, otherwise place it on the left. */
  const navActiveStyles =
    dropdownPosition === "right"
      ? {
          right: 0,
        }
      : {
          left: 0,
        };
  /* Base styles for the close menu icon. */
  const iconXMark = {
    position: "absolute",
    top: "0.3em",
    fontSize: "2.5rem",
    color: "#ccccc",
    cursor: "pointer",
    transition: "color 0.5s ease",
  };

  /* Position styles for the close menu icon based on the dropdownPosition property. */
  const iconXMarkPosition =
    dropdownPosition === "right"
      ? { right: `calc(${menuWidthPercentage}% + 0.3em)` }
      : { left: `calc(${menuWidthPercentage}% + 0.3em)` };
  /* Combined styles that include the base and position styles for the close menu icon. */
  const iconXMarkCombinedStyles: CSSProperties = {
    ...iconXMark,
    ...iconXMarkPosition,
    /* We set "position" to "absolute" again in iconXMarkCombinedStyles
   to ensure that TypeScript accurately infers that "position" is always
   "absolute" in this context, addressing type inference issues.  */
    position: "absolute",
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current) {
        // Check if event.target is a Node or HTMLElement
        const targetNode = event.target as Node;
        // If the onClick event is raised outside the menuRef element
        if (!menuRef.current.contains(targetNode)) {
          setState(false);
        }
      }
    };
    if (state) {
      document.body.style.overflow = "hidden";
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [state, setState]);

  const handleToggle = () => {
    setState(true);
  };

  return (
    <>
      {/* 'menuRef' is attached to this container element to capture click events
    within the entire dropdown menu, including the menu-open button,
    and to differentiate between events inside the dropdown menu and the overlay element. */}
      <div className={dropdownMenu.container} ref={menuRef}>
        <button
          type="button"
          className={dropdownMenu.btn}
          onClick={handleToggle}
        >
          <i className={iconCss}>
            <FontAwesomeIcon icon={icon} />
          </i>
        </button>
        <nav
          style={
            state
              ? { ...navStyles, ...navActiveStyles }
              : { ...navStyles, ...leftOrRightPosition }
          }
        >
          {children}
        </nav>
      </div>
      {state && (
        <div className={dropdownMenu.overlay}>
          <i style={iconXMarkCombinedStyles}>
            <FontAwesomeIcon icon={faXmark} />
          </i>
        </div>
      )}
    </>
  );
};

export default DropdownMenu;
