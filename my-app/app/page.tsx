import HeroBanner from './components/HeroBanner';
import MovieRow from './components/MovieRow';
import PopularMovies from './components/PopularMovies';
import { fetchPopular } from './lib/tmdb';
import { Movie } from '../types/movie';

export default async function HomePage() {
  const popularData = await fetchPopular();
  const popular: Movie[] = popularData?.results || [];

  const heroMovie = popular[0] || null;

  return (
    <main className="space-y-8 pt-20">
      {heroMovie && <HeroBanner movie={heroMovie} />}
      <MovieRow movies={popular} categoryTitle="Popular" />
      <PopularMovies /> 
    </main>
  );
}
