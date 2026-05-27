import Link from 'next/link';

export function Navbar() {
  const links = ['Home', 'Movies', 'Downloads', 'Profile', 'Admin'];
  return (
    <header className="sticky top-0 z-50 glass mx-4 mt-4 rounded-2xl px-6 py-4">
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-widest text-neon">MOVIX</Link>
        <div className="hidden gap-6 md:flex">
          {links.map((link) => (
            <Link key={link} href={`/${link.toLowerCase() === 'home' ? 'home' : link.toLowerCase()}`} className="hover:text-neon transition-colors">
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
