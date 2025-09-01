import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

  const token = request.cookies.get('token');
  console.log("token", token);
  if (!token || token?.value !== '1235') {
    console.log("I am inside login");
    return NextResponse.redirect(new URL('/login', request.url));
  }
  console.log("I am inside dashboard");
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard']
}

