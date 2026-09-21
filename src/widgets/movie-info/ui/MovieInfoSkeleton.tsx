import { Skeleton } from "@/shared/ui/skeleton/Skeleton";

import styles from "./movieInfo.module.css";

export const MovieInfoSkeleton = () => {
  return (
    <div className={styles.posterWithDetails}>
      <Skeleton className={styles.posterSkeleton} />

      <div className={styles.description}>
        <Skeleton className={styles.titleSkeleton} />

        <div className={styles.buttonsSkeleton}>
          <Skeleton className={styles.buttonSkeleton} />
          <Skeleton className={styles.buttonSkeleton} />
          <Skeleton className={styles.buttonSmallSkeleton} />
        </div>

        <div className={styles.overviewSkeleton}>
          <Skeleton className={styles.overviewLine} />
          <Skeleton className={styles.overviewLine} />
          <Skeleton className={styles.overviewLine} />
          <Skeleton className={styles.overviewLast} />
        </div>

        <div className={styles.infoSkeleton}>
          <Skeleton className={styles.infoLine} />
          <Skeleton className={styles.infoLine} />
          <Skeleton className={styles.infoLine} />
          <Skeleton className={styles.infoLine} />
          <Skeleton className={styles.infoLine} />
        </div>
      </div>
    </div>
  );
};
