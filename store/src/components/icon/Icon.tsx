import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon, css }) => {
  /*   const styles = {
    color: color,
    fontSize: size,
  }; */
  return (
    <i className={css}>
      <FontAwesomeIcon icon={icon} />
    </i>
  );
};

export default Icon;
