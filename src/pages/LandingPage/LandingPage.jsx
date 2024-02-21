import styles from "./LandingPage.module.scss";
import ColoredBox from "../../components/ColoredBox/ColoredBox";

const LandingPage = () => {
  return (
    <>
      <div className={styles.conatiner}>
        <div className={styles.rotatingLogo}>
          <ColoredBox />
        </div>
      </div>
    </>
  );
};
export default LandingPage;
