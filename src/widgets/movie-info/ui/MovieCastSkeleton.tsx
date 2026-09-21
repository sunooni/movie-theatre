import styles from "./movieInfo.module.css";

export const MovieCastSkeleton = () => {
  return (
    <section className={styles.cast}>
      <div className={styles.titleSkeleton} />

      <div className={styles.list}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div className={styles.actor} key={index}>
            <div className={styles.photoSkeleton} />

            <div className={styles.nameSkeleton} />

            <div className={styles.characterSkeleton} />
          </div>
        ))}
      </div>
    </section>
  );
};
