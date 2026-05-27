import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';

export default function LandingPage() {
  return (
    <main className="min-h-screen pb-12">
      <Navbar />
      <Hero />
    </main>
  );
}
