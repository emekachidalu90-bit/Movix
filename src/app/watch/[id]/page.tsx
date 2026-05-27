'use client';

import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

export default function WatchPage({ params }: { params: { id: string } }) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    fetch(`/api/movies/${params.id}`)
      .then((res) => res.json())
      .then((movie) => setUrl(movie.video_url || ''));
  }, [params.id]);

  return (
    <main className="min-h-screen p-4">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-4 text-2xl font-bold">Now Watching</h1>
        <div className="aspect-video overflow-hidden rounded-2xl border border-white/10">
          <ReactPlayer url={url} controls width="100%" height="100%" />
        </div>
      </div>
    </main>
  );
}
