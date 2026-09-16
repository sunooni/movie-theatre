import styles from "@/widgets/movie-info/ui/movieInfo.module.css";

export const SimilarMoviesSkeleton = () => {
  return (
    <section className={styles.similarSkeleton}>
      <div className={styles.titleSimilarSkeleton} />

      <div className={styles.similarListSkeleton}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div className={styles.similarCardSkeleton} key={index}>
            <div className={styles.similarPosterSkeleton} />

            <div className={styles.similarInfoSkeleton}>
              <div />
              <div />
              <div />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
