import styles from "./BodyH.module.scss";

const BodyH = () => {
  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.container}>
          <div className={styles.logo}></div>
          <p>Lorem ipsum dolor sit amet</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className={styles.scrollItem}>
            <p>scroll</p>
            <hr className={styles.lineBelowScroll} />
          </div>
        </div>
      </div>
    </>
  );
};
export default BodyH;
