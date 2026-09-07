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

    const movieId = Number(id);

    const fetchMovieData = async () => {
      try {
        const movie = await getMovieDetails(movieId);
        const credits = await getMovieCredits(movieId);
        const similarMovies = await getSimilarMovies(movieId);
        const videos = await getMovieVideos(movieId);
        const reviews = await getMovieReviews(movieId);

        setMovie(movie);
        setCredits(credits);
        setSimilarMovies(similarMovies);
        setVideos(videos);
        setReviews(reviews);
      } catch (error) {
        console.error("Ошибка загрузки фильма:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [id]);

  return {
    movie,
    credits,
    similarMovies,
    videos,
    reviews,
    loading,
  };
};