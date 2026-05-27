import Link from 'next/link';
import type { Route } from 'next';
import type { IMovie } from '@/types';

export function MovieCard({ movie }: { movie: IMovie }) {
  return (
    <Link href={`/movies/${movie.id}` as Route} className="glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform">
      <img src={movie.thumbnail} alt={movie.title} className="h-52 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-semibold">{movie.title}</h3>
        <p className="text-sm text-white/70">{movie.year} • ⭐ {movie.rating}</p>
      </div>
    </Link>
  );
}
