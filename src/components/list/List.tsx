import { Link } from "react-router-dom";

/* components */
import Icon from "../../components/icon/Icon";

import { ListType } from "./ListType";

const List = ({ ulTagCss, liTagCss, elements }: ListType) => {
  const cssUl = ulTagCss || "";
  const cssLi = liTagCss || "";
  return (
    <ul className={cssUl}>
      {elements.map((el, i) => (
        <li key={i} onClick={el.onClick} className={cssLi}>
          <Link to={el.path} className={el.cssLink}>
            {el.icon && <Icon icon={el.icon.name} css={el.icon.css} />}
            {el.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default List;
