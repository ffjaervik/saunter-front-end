import Footer from "./Footer"
import Navbar from "./Navbar"
import ExperimentalNavbar from "./ExperimentalHamburger";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <ExperimentalNavbar />
      { children }
      <Footer />
    </div>
  );
}
 
export default Layout;