import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';

export default function LandingPage() {
  return (
    <main className="min-h-screen pb-12">
      <Navbar />
      <Hero />
      <section className="mx-4 mt-6 grid gap-4 md:grid-cols-3">
        {[
          { title: '1. Paste URL', text: 'Drop a valid video URL and let Movix parse the source metadata.' },
          { title: '2. Select format', text: 'Choose quality, format, and audio-only variants before export.' },
          { title: '3. Download', text: 'Track progress in your queue and save files to your device securely.' }
        ].map((item) => (
          <article key={item.title} className="glass rounded-2xl p-5">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-white/75">{item.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
