import { useEffect, useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";

export const useReviewHtml = (reviews: any[]) => {
  const [reviewHtml, setReviewHtml] = useState<Record<string, string>>({});

  useEffect(() => {
    const convertReviews = async () => {
      const html: Record<string, string> = {};

      for (const review of reviews) {
        const markdown = await marked.parse(review.content);

        html[review.id] = DOMPurify.sanitize(markdown);
      }

      setReviewHtml(html);
    };

    convertReviews();
  }, [reviews]);

  return reviewHtml;
};
