import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <>
      <nav className={styles.container}>
        <div className={styles.logo}></div>
        <div className={styles.links}>
          <p>Home</p>
          <p>Page1</p>
          <p>Page2</p>
        </div>
        <div className={styles.mobileBars}>
          <img src="Group3546.png" alt="hamburger" />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
