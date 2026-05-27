import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ notifications: [{ id: 1, message: 'New episode dropped!' }] });
}
