import { NavLink } from "react-router-dom";

/* components */
import Icon from "../../components/icon/Icon";

/* Types */
import { NavListType } from "./NavListType";

const NavList = ({ ulTagCss, liTagCss, elements }: NavListType) => {
  const cssUl = ulTagCss || "";
  const cssLi = liTagCss || "";
  return (
    <ul className={cssUl}>
      {elements.map((el, i) => (
        <li key={el.id || i} onClick={el.onClick} className={cssLi}>
          <NavLink
            to={el.path}
            title={(el.titleLink && el.titleLink) || ""}
            className={({ isActive }) =>
              isActive ? `${el.cssLink} ${el.cssLinkActive}` : el.cssLink
            }
          >
            {el.icon && <Icon icon={el.icon.name} css={el.icon.css} />}
            {el.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
