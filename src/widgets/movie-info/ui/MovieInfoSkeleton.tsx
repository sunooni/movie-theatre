import styles from "./movieInfo.module.css";

export const MovieInfoSkeleton = () => {
  return (
    <div className={styles.posterWithDetails}>
      <div className={styles.posterSkeleton} />

      <div className={styles.description}>
        <div className={styles.titleSkeleton} />

        <div className={styles.buttonsSkeleton}>
          <div className={styles.buttonSkeleton} />
          <div className={styles.buttonSkeleton} />
          <div className={styles.buttonSmallSkeleton} />
        </div>

        <div className={styles.overviewSkeleton}>
          <div />
          <div />
          <div />
          <div />
        </div>

        <div className={styles.infoSkeleton}>
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};
