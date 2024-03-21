import styles from "../loading.module.css";

export default function MealsLoadingPage() {
  return (
    <div className={styles.loaderWrapper}>
      <p className={styles.loader}>L &nbsp; ading</p>;
    </div>
  );
}
