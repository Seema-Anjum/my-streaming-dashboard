process.env.NODE_OPTIONS = "--dns-result-order=ipv4first";

const BASE = "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_API_KEY; 

async function fetchSafe(url: string) {
  try {
    const res = await fetch(url, { cache: "no-store", keepalive: true });
    if (!res.ok) return { results: [] };
    return res.json();
  } catch (err) {
    console.error("TMDB fetch error:", err);
    return { results: [] };
  }
}


export async function fetchPopular() {
  return fetchSafe(`${BASE}/movie/popular?api_key=${API_KEY}`);
}

export async function fetchTopRated() {
  return fetchSafe(`${BASE}/movie/top_rated?api_key=${API_KEY}`);
}

export async function fetchNowPlaying() {
  return fetchSafe(`${BASE}/movie/now_playing?api_key=${API_KEY}`);
}

export async function fetchMovieById(id: string) {
  return fetchSafe(`${BASE}/movie/${id}?api_key=${API_KEY}`);
}

