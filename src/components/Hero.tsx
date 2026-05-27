'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-4 mt-8 rounded-3xl bg-gradient p-8 md:p-16">
      <h1 className="text-4xl md:text-6xl font-black leading-tight">Stream Cinema. Download Freedom.</h1>
      <p className="mt-4 max-w-2xl text-white/80">Discover trending blockbusters, anime, and classics with premium playback and offline support.</p>
      <div className="mt-8 flex gap-4">
        <Link href="/home" className="rounded-xl bg-neon px-6 py-3 font-semibold text-black">Start Watching</Link>
        <Link href="/auth/register" className="rounded-xl border border-white/20 px-6 py-3">Create Account</Link>
      </div>
    </motion.section>
  );
}
