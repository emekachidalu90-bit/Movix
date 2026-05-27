import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';
import { signToken } from '@/lib/auth';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const { data: user } = await db.from('users').select('id,email,password,role').eq('email', email).maybeSingle();
  if (!user?.password || !(await bcrypt.compare(password, user.password))) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
  const token = signToken({ userId: user.id, role: user.role });
  return NextResponse.json({ token });
}
