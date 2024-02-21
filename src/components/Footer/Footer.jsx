import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.outerContainer}>
        <div className={styles.container}>
          <div className={styles.navigation}>
            <p>Home</p>
            <p>Page1</p>
            <p>Page2</p>
          </div>
          <div className={styles.socialIcons}>
            <p>
              <img src="/facebook.png" alt="facebook" />
            </p>
            <p>
              <img src="/twitter.png" alt="twitter" />
            </p>
            <p>
              <img src="/instagram.png" alt="instasgram" />
            </p>
            <p>
              <img src="/tiktok.png" alt="tiktok" />
            </p>
          </div>
          <p>Logo. Inc.</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
