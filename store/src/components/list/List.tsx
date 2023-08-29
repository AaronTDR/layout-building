import { Link } from "react-router-dom";

/* components */
import Icon from "../../components/icon/Icon";

import { ListType } from "./ListType";

const List = ({ ulTagCss, liTagCss, elements }: ListType) => {
  const cssUl = ulTagCss ? ulTagCss : "";
  const cssLi = liTagCss ? liTagCss : "";
  return (
    <ul className={cssUl}>
      {elements.map((e, i) => {
        const isThereIcon = e.icon && (
          <Icon icon={e.icon.name} css={e.icon.css} />
        );
        return (
          <li key={i} className={cssLi}>
            <Link to={e.path} className={e.cssLink}>
              {isThereIcon}
              {e.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
