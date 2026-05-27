import { createClient } from '@supabase/supabase-js';

const db = createClient(process.env.SUPABASE_URL as string, process.env.SUPABASE_SERVICE_ROLE_KEY as string);

async function run() {
  await db.from('movies').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  await db.from('movies').insert([
    {
      title: 'Neon Frontier',
      description: 'A cyberpunk resistance saga.',
      genre: ['Sci-Fi', 'Action'],
      language: 'English',
      year: 2026,
      rating: 8.7,
      thumbnail: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
      banner: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba',
      video_url: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
      trailer_url: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
      quality_options: ['1080p', '720p', '480p'],
      category: 'trending'
    }
  ]);
  console.log('Seed complete');
}

run();
