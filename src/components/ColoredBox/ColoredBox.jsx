import styles from "./ColoredBox.module.scss";

const ColoredBox = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.blue}></div>
        <div className={styles.green}></div>
        <div className={styles.yellow}></div>
        <div className={styles.red}></div>
      </div>
    </>
  );
};
export default ColoredBox;
