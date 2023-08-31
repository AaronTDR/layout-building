import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconType } from "./iconType";

const Icon = ({ icon, css }: IconType) => {
  return (
    <i className={css}>
      <FontAwesomeIcon icon={icon} />
    </i>
  );
};

export default Icon;
