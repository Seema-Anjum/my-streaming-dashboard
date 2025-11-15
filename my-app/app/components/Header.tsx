"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query.trim())}`);
      setQuery("");
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 bg-black text-white">
      <h1 className="text-2xl font-bold cursor-pointer text-[#f94f57]" onClick={() => router.push("/")}>
        Streambox 🎥
      </h1>

      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className="px-4 py-2 rounded-l bg-gray-800 text-white focus:outline-none w-64"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-red-600 rounded-r hover:bg-red-700 transition"
        >
          Search
        </button>
      </form>
    </header>
  );
}

