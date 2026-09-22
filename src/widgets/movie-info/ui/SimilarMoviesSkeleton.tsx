import { Skeleton } from "@/shared/ui/skeleton/Skeleton";

import styles from "./movieInfo.module.css";

export const SimilarMoviesSkeleton = () => {
  return (
    <section className={styles.similarSkeleton}>
      <Skeleton className={styles.titleSimilarSkeleton} />

      <div className={styles.similarListSkeleton}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className={styles.similarCardSkeleton} />
        ))}
      </div>
    </section>
  );
};
