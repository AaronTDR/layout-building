/* components */
import List from "../list/List";
import TextTruncate from "../textTruncate/TextTruncate";
import footerLinksStyles from "./footerLinks.module.css";

const list1 = [
  { path: "#", text: "Careers", cssLink: footerLinksStyles.footerLink },
  { path: "#", text: "Blog", cssLink: footerLinksStyles.footerLink },
  { path: "#", text: "About", cssLink: footerLinksStyles.footerLink },
  {
    path: "#",
    text: "Investor Relations",
    cssLink: footerLinksStyles.footerLink,
  },
  {
    path: "#",
    text: "Devices Relations",
    cssLink: footerLinksStyles.footerLink,
  },
  {
    path: "#",
    text: "Science Relations",
    cssLink: footerLinksStyles.footerLink,
  },
];
const list2 = [
  { path: "#", text: "Sell products", cssLink: footerLinksStyles.footerLink },
  { path: "#", text: "Sell Apps", cssLink: footerLinksStyles.footerLink },
  {
    path: "#",
    text: "Become an Affiliate",
    cssLink: footerLinksStyles.footerLink,
  },
  {
    path: "#",
    text: "Advertise Your Products",
    cssLink: footerLinksStyles.footerLink,
  },
  {
    path: "#",
    text: "Self-Publish with Us",
    cssLink: footerLinksStyles.footerLink,
  },
  { path: "#", text: "Host Hub", cssLink: footerLinksStyles.footerLink },
  {
    path: "#",
    text: "See More Make Money with Us",
    cssLink: footerLinksStyles.footerLink,
  },
];
const list3 = [
  { path: "#", text: "Business Card", cssLink: footerLinksStyles.footerLink },
  {
    path: "#",
    text: "Shop with points",
    cssLink: footerLinksStyles.footerLink,
  },
  {
    path: "#",
    text: "Reload Your Balance",
    cssLink: footerLinksStyles.footerLink,
  },
  {
    path: "#",
    text: "Currency Converter",
    cssLink: footerLinksStyles.footerLink,
  },
];
const list4 = [
  { path: "#", text: "Your Account", cssLink: footerLinksStyles.footerLink },
  { path: "#", text: "Your Orders", cssLink: footerLinksStyles.footerLink },
  {
    path: "#",
    text: "Shipping Rates & Policies",
    cssLink: footerLinksStyles.footerLink,
  },
  {
    path: "#",
    text: "Returns & Replacements",
    cssLink: footerLinksStyles.footerLink,
  },
  {
    path: "#",
    text: "Manage Your Content and Devices",
    cssLink: footerLinksStyles.footerLink,
  },
  { path: "#", text: "Assistant", cssLink: footerLinksStyles.footerLink },
  { path: "#", text: "Help", cssLink: footerLinksStyles.footerLink },
];

const FooterLinks = () => {
  return (
    <div className={footerLinksStyles.footerLinksContainer}>
      <div className={footerLinksStyles.footerLinkColumn}>
        <TextTruncate
          text="Get to Know Us"
          rows={1}
          tagType="h3"
          css={footerLinksStyles.footerTitleColumn}
        />
        <List
          ulTagCss={footerLinksStyles.footerListLinks}
          liTagCss={footerLinksStyles.footerListElement}
          elements={list1}
        />
      </div>
      <div className={footerLinksStyles.footerLinkColumn}>
        <TextTruncate
          text="Make Money With Us"
          rows={1}
          tagType="h3"
          css={footerLinksStyles.footerTitleColumn}
        />
        <List
          ulTagCss={footerLinksStyles.footerListLinks}
          liTagCss={footerLinksStyles.footerListElement}
          elements={list2}
        />
      </div>
      <div className={footerLinksStyles.footerLinkColumn}>
        <TextTruncate
          text="Payment Products"
          rows={1}
          tagType="h3"
          css={footerLinksStyles.footerTitleColumn}
        />
        <List
          ulTagCss={footerLinksStyles.footerListLinks}
          liTagCss={footerLinksStyles.footerListElement}
          elements={list3}
        />
      </div>
      <div className={footerLinksStyles.footerLinkColumn}>
        <TextTruncate
          text="Let Us Help You"
          rows={1}
          tagType="h3"
          css={footerLinksStyles.footerTitleColumn}
        />
        <List
          ulTagCss={footerLinksStyles.footerListLinks}
          liTagCss={footerLinksStyles.footerListElement}
          elements={list4}
        />
      </div>
    </div>
  );
};

export default FooterLinks;
