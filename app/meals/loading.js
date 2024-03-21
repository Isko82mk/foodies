import styles from "./loading.module.css";

export default function Loader() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.loader}></p>
    </div>
  );
}
