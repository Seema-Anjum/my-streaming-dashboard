"use client";

import { Movie } from "@/types/movie";
import MovieCard from "./MovieCard";
import "./MovieRow.css";

export default function MovieRow({ movies, categoryTitle }: { movies: Movie[]; categoryTitle: string }) {
  return (
    <div className="movie-row">
      <h2 className="category-title">{categoryTitle}</h2>
      <div className="movie-row-cards">
        {movies.length > 0
          ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          : Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="movie-card-skeleton" />
            ))}
      </div>
    </div>
  );
}
