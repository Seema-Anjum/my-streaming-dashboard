
  export interface Movie {
  id: number;
  title: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
  overview?: string;
  release_date?: string;
  genres?: { id: number; name: string }[];
  vote_average: number;
}


export interface MovieDetail extends Movie {
  overview: string;
  release_date: string;
  runtime: number;
  genres: { id: number; name: string }[];
  vote_average: number;
}
