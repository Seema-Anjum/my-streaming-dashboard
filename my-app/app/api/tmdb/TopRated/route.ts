import { NextResponse } from "next/server";

export async function GET() {
  try {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}`;
    const res = await fetch(url, { cache: "no-store" });
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ results: [] }, { status: 500 });
  }
}
