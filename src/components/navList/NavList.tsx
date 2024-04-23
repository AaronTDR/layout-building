import { NavLink } from "react-router-dom";

/* components */
import Icon from "../../components/icon/Icon";

const NavList = ({ ulTagCss, liTagCss, elements }) => {
  const cssUl = ulTagCss || null;
  const cssLi = liTagCss || null;
  return (
    <ul className={cssUl}>
      {elements.map((el, i) => (
        <li key={i} onClick={el.onClick} className={cssLi}>
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
