import { FC } from "react";

import { listType } from "./listType";

const List: FC<listType> = ({ css, elements }) => {
  return (
    <ul className={css}>
      {elements.map((e, i) => (
        <li key={i}>{e.listElement}</li>
      ))}
    </ul>
  );
};

export default List;
