import { useContext } from "react";
import { Link } from "react-router-dom";
import { faNotdef } from "@fortawesome/free-solid-svg-icons";

/* Components */
import Icon from "../../../../components/icon/Icon";
import GenericCarousel from "../../../../components/carousel/GenericCarousel";
import TextTruncate from "../../../../components/textTruncate/TextTruncate";

/* context theme */
import { ThemeContext } from "../../../../contexts/ThemeProvider";

/* Styles */
import styles from "./resultCard.module.css";
import stylesTheme from "./theme/resultCardTheme.module.css";

/* Types */
import { ResultCardType } from "./ResultCardType";

/* Utils */
import { getThemeClasses } from "../../../../utils/getThemeClasses/getThemeClasses";

const ResultCard: React.FC<ResultCardType> = ({ item }) => {
  const itemDetailsLink = `https://api.mercadolibre.com/items/${item.id}/`;
  const originalPrice = item.original_price || null;
  const price = item.price;

  const { isDarkMode } = useContext(ThemeContext);

  const stylesWithTheme = {
    theme: getThemeClasses(isDarkMode, stylesTheme),
  };

  const getDiscount = (originalPrice: number, price: number): number => {
    const discount = ((originalPrice - price) / originalPrice) * 100;
    return Math.round(discount);
  };

  const separateDecimals = (amount: number | null) => {
    if (!amount) return [null, null];
    const str = amount.toString();
    const parts = str.split(".");

    if (parts.length < 1) return [parts[0]];
    const decimals = Number("0." + parts[1]);

    return [parts[0], decimals.toFixed(2).split(".")[1]];
  };

  // Gets the price with integer and decimals with or without discount
  const [priceInteger, priceDecimals] = separateDecimals(price);

  // Original price if there is a discount
  const [originalPriceInteger, originalPriceDecimals] =
    separateDecimals(originalPrice);

  return (
    <div className={`${styles.container}`}>
      <div className={styles.imgContainer}>
        {item?.picturesArr?.length ? (
          <GenericCarousel id={item.id} images={item.picturesArr} />
        ) : (
          <Link to={itemDetailsLink} className={styles.imgLink}>
            <Icon icon={faNotdef} css={styles.notDefIcon} />
          </Link>
        )}
      </div>
      <Link
        to={itemDetailsLink}
        className={`${stylesWithTheme.theme} ${styles.content}`}
      >
        <div className={styles.priceSection}>
          {!originalPrice ? (
            <div className={styles.priceWrapper}>
              <div className={styles.principalPrice}>
                <span className={styles.integer}>{`$ ${priceInteger}`}</span>
                <span className={styles.decimals}>
                  {priceDecimals && priceDecimals}
                </span>
              </div>
            </div>
          ) : (
            <div className={styles.priceWrapper}>
              <div className={styles.principalPrice}>
                <span className={styles.integer}>{`$ ${priceInteger}`}</span>
                <span className={styles.decimals}>
                  {priceDecimals && priceDecimals}
                </span>
              </div>
              {/* If original price exists, then the discount percentage is obtained and displayed on an offer label */}
              {getDiscount(originalPrice, price) > 0 && (
                <span className={styles.discount}>
                  {`- ${getDiscount(originalPrice, price)}%`}
                </span>
              )}
            </div>
          )}
          {originalPrice && (
            <div>
              <span className={styles.originalPriceInteger}>
                {`$ ${originalPriceInteger}`}
              </span>
              <span className={styles.originalPriceDecimals}>
                {originalPriceDecimals && originalPriceDecimals}
              </span>
            </div>
          )}
        </div>
        <div className={styles.information}>
          <TextTruncate text={item.title} rows={3} tagType="h2" css={""} />
        </div>
        {item.official_store_name && (
          <div className={styles.seller}>
            {`${item.official_store_name} Store`}
          </div>
        )}
        {item?.shipping?.free_shipping && (
          <span className={styles.shipping}>Free Shipping</span>
        )}
      </Link>
    </div>
  );
};

export default ResultCard;
