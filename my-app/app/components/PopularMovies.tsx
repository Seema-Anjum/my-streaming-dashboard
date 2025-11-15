"use client";

import { useEffect, useState } from "react";
import MovieRow from "./MovieRow";
import { Movie } from "../../types/movie";

export default function PopularMovies() {
  const [popular, setPopular] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/tmdb/popular");
        const data = await res.json();
        setPopular(data.results || []);
      } catch {
        setPopular([]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p className="text-gray-400 text-center mt-8">Loading popular movies...</p>;

  return (
    <>
      {popular.length > 0 && <MovieRow movies={popular} categoryTitle="Popular Movies" />}
    </>
  );
}
