import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { MovieCast } from "@/widgets/movie-info/ui/MovieCast";
import { MovieInfo } from "@/widgets/movie-info/ui/MovieInfo";
import { SimilarMovies } from "@/widgets/movie-info/ui/MovieSimilar";


export const MovieDetailsPage = () => {
 
  return (
    <>
      <Header />
<MovieInfo/>
    <MovieCast/>
    <SimilarMovies/>
      <Footer />
    </>
  );
};