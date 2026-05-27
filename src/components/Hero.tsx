'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export function Hero() {
  const [url, setUrl] = useState('');

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-4 mt-8 rounded-3xl border border-white/10 bg-gradient p-8 md:p-16">
      <p className="text-sm uppercase tracking-[0.2em] text-neon">Movix Downloader</p>
      <h1 className="mt-3 text-4xl font-black leading-tight md:text-6xl">Paste a link. Get your video fast.</h1>
      <p className="mt-4 max-w-2xl text-white/80">Premium, cinematic download experience for your own or licensed video content with instant quality options.</p>

      <div className="glass mt-8 rounded-2xl p-3 md:p-4">
        <div className="flex flex-col gap-3 md:flex-row">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste your video URL here..."
            className="h-12 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-white placeholder:text-white/45 focus:border-neon focus:outline-none"
          />
          <button className="h-12 rounded-xl bg-neon px-6 font-semibold text-black transition hover:brightness-95">Analyze</button>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-white/70 md:grid-cols-4">
          <span className="rounded-lg border border-white/10 px-3 py-2">MP4 / WEBM</span>
          <span className="rounded-lg border border-white/10 px-3 py-2">1080p / 720p</span>
          <span className="rounded-lg border border-white/10 px-3 py-2">Audio extract</span>
          <span className="rounded-lg border border-white/10 px-3 py-2">Queue support</span>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/downloads" className="rounded-xl bg-neon px-6 py-3 font-semibold text-black">Open Downloads</Link>
        <Link href="/home" className="rounded-xl border border-white/20 px-6 py-3">Browse Movies</Link>
        <Link href="/auth/register" className="rounded-xl border border-white/20 px-6 py-3">Create Account</Link>
      </div>
    </motion.section>
  );
}
