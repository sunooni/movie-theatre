import { useState } from "react";

import { useMovieDetails } from "@/widgets/movie-info/model/useMovieDetails";
import { useReviewHtml } from "../model/useReviewHtml";

import { Button } from "@/shared/ui/button/Button";

import styles from "@/widgets/movie-info/ui/movieInfo.module.css";
import { MovieReviewsSkeleton } from "./MovieReviewsSkeleton";

export const MovieReviews = () => {
  const { reviews, loading } = useMovieDetails();
  const reviewHtml = useReviewHtml(reviews);

  const [showReviews, setShowReviews] = useState(false);

  if (loading) {
    return <MovieReviewsSkeleton />;
  }
  if (!reviews.length) {
    return null;
  }

  return (
    <section className={styles.reviews}>
      <Button variant="secondary" size="large" onClick={() => setShowReviews(!showReviews)}>
        {showReviews ? "Скрыть отзывы" : "Читать отзывы"}
      </Button>

      {showReviews &&
        reviews.map((review) => (
          <article className={styles.review} key={review.id}>
            <h3 className={styles.author}>{review.author}</h3>

            <div
              className={styles.content}
              dangerouslySetInnerHTML={{
                __html: reviewHtml[review.id] || "",
              }}
            />
          </article>
        ))}
    </section>
  );
};
