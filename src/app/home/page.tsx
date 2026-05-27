import { Navbar } from '@/components/Navbar';
import { MovieCard } from '@/components/MovieCard';
import { db } from '@/lib/db';

export default async function HomePage() {
  const { data: movies } = await db.from('movies').select('*').order('created_at', { ascending: false }).limit(16);

  return (
    <main className="min-h-screen pb-12">
      <Navbar />
      <section className="mx-4 mt-8">
        <h2 className="text-3xl font-bold">Trending Now</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(movies || []).map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </section>
    </main>
  );
}
