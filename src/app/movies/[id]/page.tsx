import { db } from '@/lib/db';
import Link from 'next/link';
import type { Route } from 'next';

export default async function MovieDetails({ params }: { params: { id: string } }) {
  const { data: movie } = await db.from('movies').select('*').eq('id', params.id).single();
  if (!movie) return <div className="p-8">Movie not found.</div>;

  return (
    <main className="min-h-screen p-4 md:p-8">
      <img src={movie.banner} alt={movie.title} className="h-80 w-full rounded-2xl object-cover" />
      <h1 className="mt-6 text-4xl font-bold">{movie.title}</h1>
      <p className="mt-3 max-w-3xl text-white/80">{movie.description}</p>
      <div className="mt-6 flex gap-4">
        <Link href={`/watch/${movie.id}` as Route} className="rounded-xl bg-neon px-6 py-3 font-semibold text-black">Watch</Link>
        <a href={movie.video_url} download className="rounded-xl border border-white/20 px-6 py-3">Download</a>
      </div>
    </main>
  );
}
