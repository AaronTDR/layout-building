/* components */
import List from "../list/List";
import Logo from "../logo/Logo";
import SocialMedia from "../socialMedia/SocialMedia";
/* styles */
import termsStyles from "./terms.module.css";

const termListElements = [
  {
    path: "#",
    text: "Conditions of Use",
    cssLink: termsStyles.footerTermsLink,
  },
  {
    path: "#",
    text: "Privacy Notice",
    cssLink: termsStyles.footerTermsLink,
  },
  {
    path: "#",
    text: "Your Ads Privacy Choices",
    cssLink: termsStyles.footerTermsLink,
  },
];

const Terms = () => {
  return (
    <div className={termsStyles.footerBottom}>
      <div className={termsStyles.footerSocialMediaContainer}>
        <SocialMedia
          containerCss={termsStyles.footerSocialMediaContent}
          iconCss={termsStyles.footerSocialMediaIcon}
        />
      </div>
      <div className={termsStyles.footerTermsContainer}>
        <Logo />
        <List
          ulTagCss={termsStyles.footerListTerms}
          liTagCss={termsStyles.footerListElementTerms}
          elements={termListElements}
        />
        <span className={termsStyles.footerTermsText}>
          © 2007-2023, DealDepot.com, Inc. or its affiliates
        </span>
      </div>
    </div>
  );
};

export default Terms;
