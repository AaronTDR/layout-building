import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import shoppingCartStyles from "./shoppingCartStyles.module.css";

const ShoppingCart = () => {
  return (
    <div className={shoppingCartStyles.shoppingCartContainer}>
      <div className={shoppingCartStyles.shoppingCartNumberContainer}>
        <span className={shoppingCartStyles.shoppingCartNumber}>10</span>
      </div>
      <i className={shoppingCartStyles.stickyShoppingCartIcon}>
        <FontAwesomeIcon icon={faCartArrowDown} />
      </i>
    </div>
  );
};

export default ShoppingCart;
