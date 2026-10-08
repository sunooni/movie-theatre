import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/home/ui/HomePage"));
const MovieDetailsPage = lazy(() => import("@/pages/movie-details/ui/MovieDetailsPage"));
const FavoritesPage = lazy(() => import("@/pages/favorites/ui/FavoritesPage"));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Suspense>
  );
};
