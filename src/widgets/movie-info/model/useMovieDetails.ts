import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getMovieCredits,
  getMovieDetails,
  getMovieReviews,
  getMovieVideos,
  getSimilarMovies,
} from "@/entities/movie/api/movieDetails";
export const useMovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);
  const [credits, setCredits] = useState<any>(null);
  const [similarMovies, setSimilarMovies] = useState<any[]>([]);
  const [videos, setVideos] = useState<any[]>([]);
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    const fetchMovieData = async () => {
      setLoading(true);
      const [movieResult, creditsResult, similarMoviesResult, videosResult, reviewsResult] =
        await Promise.allSettled([
          getMovieDetails(Number(id)),
          getMovieCredits(Number(id)),
          getSimilarMovies(Number(id)),
          getMovieVideos(Number(id)),
          getMovieReviews(Number(id)),
        ]);
      if (movieResult.status === "fulfilled") {
        setMovie(movieResult.value);
      }
      if (creditsResult.status === "fulfilled") {
        setCredits(creditsResult.value);
      }
      if (similarMoviesResult.status === "fulfilled") {
        setSimilarMovies(similarMoviesResult.value);
      }
      if (videosResult.status === "fulfilled") {
        setVideos(videosResult.value);
      }
      if (reviewsResult.status === "fulfilled") {
        setReviews(reviewsResult.value);
      }
      setLoading(false);
    };
    fetchMovieData();
  }, [id]);
  return { movie, credits, similarMovies, videos, reviews, loading };
};
