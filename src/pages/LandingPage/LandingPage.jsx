import styles from "./LandingPage.module.scss";
import ColoredBox from "../../components/ColoredBox/ColoredBox";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import BodyH from "../../components/BodyH/BodyH";

const LandingPage = () => {
  return (
    <>
      <div className={styles.conatiner}>
        <BodyH />
        <nav className={styles.navBar}>
          <NavBar />
        </nav>
        <div className={styles.rotatingLogo}>
          <ColoredBox />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default LandingPage;
