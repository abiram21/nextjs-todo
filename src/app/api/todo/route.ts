import prisma from '@/db';
import { NextRequest, NextResponse } from 'next/server';


export async function GET() {
  try {
    const todos = await prisma.todo.findMany();
    return NextResponse.json(todos);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch todos' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, content } = await req.json();
    const newTodo = await prisma.todo.create({
      data: { title },
    });
    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create todo' }, { status: 500 });
  }
}