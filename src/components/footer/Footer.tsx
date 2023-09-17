/* components */
import FooterServices from "../footerServices/FooterServices";
import FooterLinks from "../footerLinks/FooterLinks";
import Terms from "../terms/Terms";
/* styles */
import footerStyles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <FooterServices />
      <FooterLinks />
      <Terms />
    </footer>
  );
};

export default Footer;
