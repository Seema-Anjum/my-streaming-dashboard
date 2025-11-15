import { fetchMovieById } from '../../lib/tmdb';
import Image from 'next/image';

export default async function MovieDetailPage({ params }: { params: { id: string } }) {
  const movie = await fetchMovieById(params.id);

  return (
    <main className="p-4 md:flex gap-6">
      <div className="md:flex-shrink-0 relative w-full md:w-1/3 h-96 md:h-auto">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded"
        />
      </div>
      <div className="mt-4 md:mt-0 md:flex-1">
        <h1 className="text-2xl font-bold">{movie.title}</h1>
        <p className="text-sm text-gray-300 my-2">{movie.release_date}</p>
        <p>{movie.overview}</p>
      </div>
    </main>
  );
}
