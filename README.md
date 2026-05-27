# Movix (Supabase + Render)

Production-ready full-stack movie streaming/downloading platform built with Next.js, TypeScript, Tailwind, Supabase, and JWT auth.

## Features
- Cinematic dark UI with glassmorphism and animation
- Auth (register/login/forgot + Google OAuth stub)
- Movie browsing, details, watch and download
- Admin API for movie upload with role-protected JWT middleware
- Recommendation and notification endpoints
- PWA-ready config

## Folder Structure
- `src/app`: App Router pages + API routes
- `src/components`: Reusable UI components
- `src/lib`: Auth and Supabase client helpers
- `src/types`: Shared interfaces
- `scripts/seed.ts`: Sample data seeding

## Supabase setup
Create these tables in Supabase SQL editor:

```sql
create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text unique not null,
  password text,
  role text default 'user',
  created_at timestamptz default now()
);

create table if not exists movies (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  genre text[] default '{}',
  language text,
  year int,
  rating numeric,
  thumbnail text,
  banner text,
  video_url text,
  trailer_url text,
  quality_options text[] default '{}',
  category text check (category in ('trending','popular','anime')),
  created_at timestamptz default now()
);
```

## Local setup
1. `npm install`
2. `cp .env.example .env.local`
3. Fill Supabase and JWT values
4. `npm run dev`
5. Optional seed: `npm run seed`

## Deploying to Render
1. Push repo to GitHub.
2. In Render, create **Web Service**.
3. Build command: `npm install && npm run build`
4. Start command: `npm run start`
5. Add environment variables from `.env.example`.
6. Deploy.

## Notes
- For production, serve media from a CDN/object storage.
- Add row-level-security policies in Supabase before production launch.
