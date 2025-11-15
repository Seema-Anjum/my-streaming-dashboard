import Image from 'next/image';
import { Movie } from '../../types/movie';

export default function HeroBanner({ movie }: { movie: Movie }) {
  return (
    <section className="relative h-80 md:h-96">
     {movie.backdrop_path &&  <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        fill
        priority
        style={{ objectFit: 'cover' }}
      /> }
      <div className="absolute bottom-4 left-4 text-white bg-black/50 p-2 rounded">
        <h2 className="text-xl font-bold">{movie.title}</h2>
      </div>
    </section>
  );
}
