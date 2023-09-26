import { useState, useEffect, useRef } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
/* components */
import Icon from "../icon/Icon";
/* styles */
import dropdownMenu from "./dropdownMenu.module.css";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={dropdownMenu.container} ref={menuRef}>
      <button type="button" className={dropdownMenu.btn} onClick={toggleMenu}>
        <Icon icon={faBars} css={dropdownMenu.iconBars} />
      </button>
      {isOpen && (
        <div onClick={toggleMenu} className={dropdownMenu.overlay}>
          <Icon icon={faXmark} css={dropdownMenu.iconXMark} />
        </div>
      )}
      <div
        className={`${dropdownMenu.nav} ${isOpen ? dropdownMenu.active : ""}`}
      >
        <p>Menu content goes here</p>
      </div>
    </div>
  );
};

export default DropdownMenu;
