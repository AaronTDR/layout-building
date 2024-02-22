/* Components */
import StickyBar from "../stickyBar/StickyBar";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({
  css,
  children,
}: {
  css: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={css}>
      <Header />
      <StickyBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
