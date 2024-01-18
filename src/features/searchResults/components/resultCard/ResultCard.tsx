import { useContext } from "react";
import { Link } from "react-router-dom";

/* Components */
import Carousel from "../../../../components/carousel/Carousel";
import TextTruncate from "../../../../components/textTruncate/TextTruncate";

/* context theme */
import { ThemeContext } from "../../../../contexts/ThemeProvider";

/* Styles */
import styles from "./resultCard.module.css";
import stylesTheme from "./theme/resultCardTheme.module.css";

/* Utils */
import { getThemeClasses } from "../../../../utils/getThemeClasses/getThemeClasses";

/* Not found img */
import notFound from "./assets/img/not-found.webp";
import imgOk from "./assets/img/img-ok.jpg";

const ResultCard = ({ item }) => {
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

  const separateDecimals = (amount: string | null) => {
    if (!amount) return [null, null];
    const str = amount.toString();
    const parts = str.split(".");
    const decimals = Number("0." + parts[1]);

    return [parts[0], decimals.toFixed(2).split(".")[1]];
  };

  const [originalPriceInteger, originalPriceDecimals] =
    separateDecimals(originalPrice);
  const [priceInteger, priceDecimals] = separateDecimals(price);

  return (
    <div className={`${styles.container}`}>
      <div className={styles.imgContainer}>
        {item?.picturesArr?.length ? (
          <Carousel id={item.id} images={item.picturesArr} />
        ) : (
          <Link to={`https://api.mercadolibre.com/items/${item.id}/`}>
            <img className={styles.img} src={notFound} alt="Image not found" />
          </Link>
        )}
      </div>
      <div className={`${stylesWithTheme.theme} ${styles.content}`}>
        <div className={styles.priceSection}>
          {!originalPriceInteger ? (
            <div className={styles.priceWrapper}>
              <div className={styles.principalPrice}>
                <span className={styles.integer}>
                  {/* `$ ${priceInteger}` */}10
                </span>
                <span className={styles.decimals}>
                  {/* `${priceDecimals}` */}90
                </span>
              </div>
            </div>
          ) : (
            <div className={styles.priceWrapper}>
              <div className={styles.principalPrice}>
                <span className={styles.integer}>
                  {/* `${priceInteger}` */}20
                </span>
                <span className={styles.decimals}>
                  99
                  {/* ${priceDecimals} */}
                </span>
              </div>
              {/* If original price exists as 'originalInteger', then the discount percentage is obtained and displayed on an offer label */}
              <span className={styles.discount}>
                {/* `${Math.round(getDiscount(item.original_price, item.price))}% OFF` */}
                10%
              </span>
            </div>
          )}

          <div className={styles.originalPriceWrapper}>
            <span className={styles.originalPriceInteger}>
              100{/* item.original_price */}
            </span>
            <span className={styles.originalPriceDecimals}>
              99{/* item.original_price */}
            </span>
          </div>
        </div>
        <div className={styles.information}>
          {/* <span>{item.sold}</span> */}
          <TextTruncate text={item.title} rows={3} tagType="h2" css={""} />
        </div>
        {item?.shipping?.free_shipping && (
          <span className={styles.shipping}>Free Shipping</span>
        )}
      </div>
    </div>
  );
};

export default ResultCard;

/*  <Carousel images={item.picturesArr} /> */
