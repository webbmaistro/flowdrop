import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  // Email functionality has been disabled
  return Response.json({ 
    success: false, 
    error: 'Email functionality is currently disabled',
    message: 'This endpoint is no longer available'
  }, { status: 503 });
} 