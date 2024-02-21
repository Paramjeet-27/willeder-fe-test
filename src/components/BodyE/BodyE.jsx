import styles from "./BodyE.module.scss";

const BodyE = () => {
  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.blueRectangle}></div>
        <div className={styles.container}>
          <div className={styles.subContainer}>
            <div className={styles.image}></div>
            <div className={styles.description}>
              <p>Lorem Ipsum</p>
              <div className={styles.imageMobile}></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Lorem ipsum
                <img
                  src="/solar_arrow-up-linear.png"
                  alt="arrow"
                  width="35px"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BodyE;
