import styles from "@/widgets/movie-info/ui/movieInfo.module.css";

export const MovieReviewsSkeleton = () => {
  return (
    <section className={styles.reviews}>
      <div className={styles.reviewsTitleSkeleton} />

      <div className={styles.reviewsButtonSkeleton} />
    </section>
  );
};
