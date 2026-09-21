import { Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { MovieDetailsPage } from "@/pages/movie-details/ui/MovieDetailsPage";
import { FavoritesPage } from "@/pages/favorites/ui/FavoritesPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MovieDetailsPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
};
