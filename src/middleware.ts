// former middleware.ts (just in case). Just this one line of code
//export { default } from "next-auth/middleware"


import { type NextRequest } from 'next/server'
import { updateSession } from '../utils/supabase/middleware'

export async function middleware(request: NextRequest) {
  // update user's auth session
  return await updateSession(request)
}

export const config = {
  matcher: [
    
   //  * Match all request paths except for the ones starting with:
   //  * - _next/static (static files)
   //  * - _next/image (image optimization files)
    // * - favicon.ico (favicon file)
    // * Feel free to modify this pattern to include more paths.
     
    
  ],
}

/*
import { NextRequest, NextResponse } from 'next/server'
import { updateSession } from '../utils/supabase/middleware'

// Middleware to check authentication
export async function middleware(request: NextRequest) {
  // Update the user's auth session
  await updateSession(request)

  // Assuming you have a function to check if a user is authenticated
  const isAuthenticated = request.cookies.get('auth-token')

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// Apply middleware to all pages except the login and signup pages
export const config = {
  matcher: [
    '/((?!api|auth|_next/static|_next/image|favicon.ico|login|signup|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    
  ],
}
*/