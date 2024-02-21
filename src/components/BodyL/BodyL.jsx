import styles from "./BodyL.module.scss";

const BodyL = () => {
  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.blueRectangle}></div>
        <div className={styles.container}>
          <div className={styles.blueRectangleText}>
            <p>Lorem</p>
            <p>Subtitle</p>
          </div>
          <div className={styles.descriptiveImages}>
            <div className={styles.image1}>
              <p>01</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className={styles.image2}>
              <p>02</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className={styles.image3}>
              <p>03</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BodyL;
