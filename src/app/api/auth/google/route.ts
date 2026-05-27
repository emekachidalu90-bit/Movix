import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ message: 'Google OAuth callback stub. Connect NextAuth/Auth.js provider.' });
}
