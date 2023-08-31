import {
  faTruckFast,
  faCreditCard,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";
/* components */
import Icon from "../icon/Icon";
import TextTruncate from "../textTruncate/TextTruncate";
/* styles */
import footerServicesStyles from "./footerServices.module.css";

const FooterServices = () => {
  return (
    <div className={footerServicesStyles.footerServicesContainer}>
      <div className={footerServicesStyles.footerServiceCard}>
        <div className={footerServicesStyles.footerIconContainer}>
          <Icon icon={faTruckFast} css={footerServicesStyles.footerIcon} />
        </div>
        <TextTruncate
          text="Worldwide shopping"
          rows={1}
          tagType="h3"
          css={footerServicesStyles.footerTitle}
        />
        <TextTruncate
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, minima officiis ad excepturi nesciunt."
          rows={3}
          tagType="p"
          css={footerServicesStyles.footerServiceDescription}
        />
      </div>
      <div className={footerServicesStyles.footerServiceCard}>
        <div className={footerServicesStyles.footerIconContainer}>
          <Icon icon={faCreditCard} css={footerServicesStyles.footerIcon} />
        </div>
        <TextTruncate
          text="Safe payment"
          rows={1}
          tagType="h3"
          css={footerServicesStyles.footerTitle}
        />
        <TextTruncate
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, minima officiis ad excepturi nesciunt."
          rows={3}
          tagType="p"
          css={footerServicesStyles.footerServiceDescription}
        />
      </div>
      <div className={footerServicesStyles.footerServiceCard}>
        <div className={footerServicesStyles.footerIconContainer}>
          <Icon icon={faShield} css={footerServicesStyles.footerIcon} />
        </div>
        <TextTruncate
          text="Shop with confidence"
          rows={1}
          tagType="h3"
          css={footerServicesStyles.footerTitle}
        />
        <TextTruncate
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, minima officiis ad excepturi nesciunt."
          rows={3}
          tagType="p"
          css={footerServicesStyles.footerServiceDescription}
        />
      </div>
      <div className={footerServicesStyles.footerServiceCard}>
        <div className={footerServicesStyles.footerIconContainer}>
          <Icon
            icon={faAndroid}
            css={`
              ${footerServicesStyles.footerIcon} ${footerServicesStyles.footerIconAndroid}
            `}
          />
          <Icon icon={faApple} css={footerServicesStyles.footerIcon} />
        </div>
        <TextTruncate
          text="Shop better"
          rows={1}
          tagType="h3"
          css={footerServicesStyles.footerTitle}
        />
        <TextTruncate
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, minima officiis ad excepturi nesciunt."
          rows={3}
          tagType="p"
          css={footerServicesStyles.footerServiceDescription}
        />
      </div>
    </div>
  );
};

export default FooterServices;
