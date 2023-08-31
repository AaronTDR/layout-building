import { Link } from "react-router-dom";

/* components */
import Icon from "../../components/icon/Icon";

import { ListType } from "./ListType";

const List = ({ ulTagCss, liTagCss, elements }: ListType) => {
  const cssUl = ulTagCss ? ulTagCss : "";
  const cssLi = liTagCss ? liTagCss : "";
  return (
    <ul className={cssUl}>
      {elements.map((el, i) => {
        const isThereIcon = el.icon ? (
          <Icon icon={el.icon.name} css={el.icon.css} />
        ) : null;
        return (
          <li key={i} className={cssLi}>
            <Link to={el.path} className={el.cssLink}>
              {isThereIcon}
              {el.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
