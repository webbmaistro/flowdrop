import { NextResponse } from 'next/server'

export async function GET(request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  
  const redirectUrl = new URL('/dashboard', request.url)
  
  if (code) {
    redirectUrl.searchParams.set('code', code)
  }
  
  return NextResponse.redirect(redirectUrl)
} 