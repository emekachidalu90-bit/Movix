import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ recommendations: ['Sci-fi picks', 'Because you watched anime action'] });
}
