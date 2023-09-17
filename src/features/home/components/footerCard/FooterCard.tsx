import { Link } from "react-router-dom";

import { FooterCardType } from "./FooterCardType";

import singleLine from "../../../../styles/singleLine.module.css";
import footerCardStyles from "../../stylesHome/footerCard.module.css";

const FooterCard = ({ path, text }: FooterCardType) => {
  return (
    <div className={footerCardStyles.footerCard}>
      <Link
        to={path}
        className={`${footerCardStyles.footerCardSeeMoreLink} ${singleLine.singleLine}`}
      >
        {text}
      </Link>
    </div>
  );
};

export default FooterCard;
