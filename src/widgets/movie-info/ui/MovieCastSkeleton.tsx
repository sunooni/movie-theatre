import { Skeleton } from "@/shared/ui/skeleton/Skeleton";

import styles from "./movieInfo.module.css";

export const MovieCastSkeleton = () => {
  return (
    <section className={styles.cast}>
      <Skeleton className={styles.titleSkeleton} />

      <div className={styles.list}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div className={styles.actor} key={index}>
            <Skeleton className={styles.photoSkeleton} />
            <Skeleton className={styles.nameSkeleton} />
            <Skeleton className={styles.characterSkeleton} />
          </div>
        ))}
      </div>
    </section>
  );
};
