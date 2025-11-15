"use client";

import { useState, useEffect } from "react";
import { Movie } from "@/types/movie";
import MovieCard from "../components/MovieCard";

const categories = [
  { key: "popular", label: "Popular" },
  { key: "top_rated", label: "Top Rated" },
  { key: "now_playing", label: "Now Playing" },
];

export default function MoviesPage() {
  const [selectedCategory, setSelectedCategory] = useState("popular");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (category: string, pageNumber: number) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/tmdb/${category}?page=${pageNumber}`);
      const data = await res.json();
      setMovies(data.results || []);
      setTotalPages(data.total_pages || 1);
    } catch (err) {
      console.error(err);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPage(1);
    fetchMovies(selectedCategory, 1);
  }, [selectedCategory]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    fetchMovies(selectedCategory, newPage);
  };

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">All Movies</h1>

      {/* Category Tabs */}
      <div className="flex gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`px-4 py-2 rounded font-semibold ${
              selectedCategory === cat.key ? "bg-red-600" : "bg-gray-800"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Movies Grid */}
      {loading ? (
        <p>Loading...</p>
      ) : movies.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>No movies found.</p>
      )}

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        {page > 1 && (
          <button
            className="px-3 py-1 bg-gray-800 rounded"
            onClick={() => handlePageChange(page - 1)}
          >
            Prev
          </button>
        )}
        <span className="px-3 py-1">{page}</span>
        {page < totalPages && (
          <button
            className="px-3 py-1 bg-gray-800 rounded"
            onClick={() => handlePageChange(page + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
