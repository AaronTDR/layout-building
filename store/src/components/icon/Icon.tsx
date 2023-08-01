import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon, size, color }) => {
  const styles = {
    color: color,
    fontSize: size,
  };
  return <FontAwesomeIcon style={styles} icon={icon} />;
};

export default Icon;
