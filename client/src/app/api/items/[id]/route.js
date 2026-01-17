import { NextResponse } from 'next/server';
import { getItemById } from '../data';

// GET /api/items/:id
export async function GET(request, context) {
  try {
    const { id } = await context.params;
    console.log('Looking for item with ID:', id);
    const item = getItemById(id);
    console.log('Found item:', item);
    
    if (!item) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }
    
    return NextResponse.json(item);
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
