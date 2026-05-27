import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#070A12',
        accent: '#8B5CF6',
        neon: '#22D3EE'
      },
      boxShadow: {
        glass: '0 8px 30px rgba(0,0,0,0.35)'
      },
      backgroundImage: {
        gradient: 'linear-gradient(130deg, #0B1020, #1E1B4B 50%, #0B1020)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config;
