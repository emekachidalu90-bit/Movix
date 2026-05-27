import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { db } from '@/lib/db';
import { signToken } from '@/lib/auth';

const schema = z.object({ name: z.string().min(2), email: z.string().email(), password: z.string().min(8) });

export async function POST(req: Request) {
  const data = schema.parse(await req.json());
  const { data: existing } = await db.from('users').select('id').eq('email', data.email).maybeSingle();
  if (existing) return NextResponse.json({ error: 'Email already exists' }, { status: 409 });
  const hash = await bcrypt.hash(data.password, 12);
  const { data: user, error } = await db.from('users').insert({ name: data.name, email: data.email, password: hash, role: 'user' }).select('id,name,email,role').single();
  if (error || !user) return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  const token = signToken({ userId: user.id, role: user.role });
  return NextResponse.json({ token, user });
}
