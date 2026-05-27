import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Movix',
  description: 'Premium movie streaming and downloads platform'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
