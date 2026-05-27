import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Home', href: '/home' },
  { label: 'Movies', href: '/movies' },
  { label: 'Downloads', href: '/downloads' },
  { label: 'Profile', href: '/profile' },
  { label: 'Admin', href: '/admin' }
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 glass mx-4 mt-4 rounded-2xl px-6 py-4">
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-widest text-neon">MOVIX</Link>
        <div className="hidden gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-neon transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
