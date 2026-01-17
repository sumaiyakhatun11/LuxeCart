import { NextResponse } from 'next/server';
import { getItems, addItem } from './data';

// GET /api/items
export async function GET() {
  try {
    const items = getItems();
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST /api/items
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, description, price } = body;
    
    if (!name || !description || !price) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const newItem = addItem(body);
    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
