"use client";

import Image from "next/image";
import { Movie } from "@/types/movie";
import "./MovieCard.css";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="movie-card">
      {movie.poster_path ? (
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={200}
          height={300}
          alt={movie.title}
        />
      ) : (
        <div className="no-image">No Image</div>
      )}
      <div className="info">
        <h2 className="title">{movie.title}</h2>
        <p className="rating">⭐ {movie.vote_average.toFixed(1)}</p>
      </div>
    </div>
  );
}
