import { Link } from "react-router-dom";
/* components */
import TextTruncate from "../../../../components/textTruncate/TextTruncate";
import FooterCard from "../footerCard/FooterCard";
/* types */
import { CardServicesType } from "./CardServicesType";

/* It generates styles for the background of each section, as a parameter it receives the background image */
const generateBackgroundStyles = (imageUrl: string) => ({
  /* Add the general values to the background image, including background image */
  height: "9.0625em",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "0.375em",
  backgroundImage: `url(${imageUrl})`,
});

const CardServices = ({ data, css }: CardServicesType) => {
  /* Gets the background image styles for each section */
  const adContainerBackgroundStyles1 = generateBackgroundStyles(
    data.sectionsData.section1.backgroundImg
  );
  const adContainerBackgroundStyles2 = generateBackgroundStyles(
    data.sectionsData.section2.backgroundImg
  );
  const adContainerBackgroundStyles3 = generateBackgroundStyles(
    data.sectionsData.section3.backgroundImg
  );
  const adContainerBackgroundStyles4 = generateBackgroundStyles(
    data.sectionsData.section4.backgroundImg
  );
  return (
    <article className={css.cardWrapperServices}>
      <header className={css.cardServicesHeader}>
        <TextTruncate
          title={data.title}
          rows={2}
          tagType="h2"
          css={css.cardServicesTitle}
        />
      </header>
      <div className={css.cardServicesGrid}>
        <Link to={"#"} className={css.adLink}>
          <div style={adContainerBackgroundStyles1}>
            <div className={`${css.adOverlay} ${css.overlayColorAd1}`}>
              <div className={css.adBrandLogoContainer}>
                <img
                  src={data.sectionsData.section1.logo}
                  alt={data.sectionsData.section1.altLogo}
                  className={css.adBrandLogo}
                />
              </div>
              <div className={css.adContain}>
                <div className={css.adText}>
                  <span>{data.sectionsData.section1.header}</span>
                </div>
                <div className={css.adOffer}>
                  <span className={css.adTextPrincipal}>
                    {data.sectionsData.section1.description}
                  </span>
                </div>
                <div className={css.adBrand}>
                  <span>{data.sectionsData.section1.brand}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"#"} className={css.adLink}>
          <div style={adContainerBackgroundStyles2}>
            <div className={`${css.adOverlay} ${css.overlayColorAd2}`}>
              <div className={css.adBrandLogoContainer}>
                <img
                  src={data.sectionsData.section2.logo}
                  alt={data.sectionsData.section2.altLogo}
                  className={css.adBrandLogo}
                />
              </div>
              <div className={css.adContain}>
                <div className={css.adText}>
                  <span>{data.sectionsData.section2.header}</span>
                </div>
                <div className={css.adOffer}>
                  <span className={css.adTextPrincipal}>
                    {data.sectionsData.section2.description}
                  </span>
                </div>
                <div className={css.adBrand}>
                  <span>{data.sectionsData.section2.brand}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"#"} className={css.adLink}>
          <div style={adContainerBackgroundStyles3}>
            <div className={`${css.adOverlay} ${css.overlayColorAd3}`}>
              <div className={css.adBrandLogoContainer}>
                <img
                  src={data.sectionsData.section3.logo}
                  alt={data.sectionsData.section3.altLogo}
                  className={css.adBrandLogo}
                />
              </div>
              <div className={css.adContain}>
                <div className={css.adText}>
                  <span>{data.sectionsData.section3.header}</span>
                </div>
                <div className={css.adOffer}>
                  <span className={css.adTextPrincipal}>
                    {data.sectionsData.section3.description}
                  </span>
                </div>
                <div className={css.adBrand}>
                  <span>{data.sectionsData.section3.brand}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"#"} className={css.adLink}>
          <div style={adContainerBackgroundStyles4}>
            <div className={`${css.adOverlay} ${css.overlayColorAd4}`}>
              <div className={css.adBrandLogoContainer}>
                <img
                  src={data.sectionsData.section4.logo}
                  alt={data.sectionsData.section4.altLogo}
                  className={css.adBrandLogo}
                />
              </div>
              <div className={css.adContain}>
                <div className={css.adText}>
                  <span>{data.sectionsData.section4.header}</span>
                </div>
                <div className={css.adOffer}>
                  <span className={css.adTextPrincipal}>
                    {data.sectionsData.section4.description}
                  </span>
                </div>
                <div className={css.adBrand}>
                  <span>{data.sectionsData.section4.brand}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <FooterCard path={"#"} text={data.textLink} />
    </article>
  );
};

export default CardServices;
