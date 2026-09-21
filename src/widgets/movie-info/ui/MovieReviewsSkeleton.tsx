import { Skeleton } from "@/shared/ui/skeleton/Skeleton";

import styles from "@/widgets/movie-info/ui/movieInfo.module.css";

export const MovieReviewsSkeleton = () => {
  return (
    <section className={styles.reviews}>
      <Skeleton className={styles.reviewsTitleSkeleton} />
      <Skeleton className={styles.reviewsButtonSkeleton} />
    </section>
  );
};
