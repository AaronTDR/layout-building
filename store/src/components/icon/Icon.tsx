import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon, css }) => {
  return (
    <i className={css}>
      <FontAwesomeIcon icon={icon} />
    </i>
  );
};

export default Icon;
