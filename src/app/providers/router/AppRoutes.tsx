import { Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { MovieDetailsPage } from "@/pages/movie-details/ui/MovieDetailsPage"; // твоя будущая страница фильма

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MovieDetailsPage />} />
    </Routes>
  );
};