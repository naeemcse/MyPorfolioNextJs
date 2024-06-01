/* import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('next-auth.session-token')?.value

    // if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
    //     return Response.redirect(new URL('/dashboard', request.url))
    // }

    if (!currentUser && request.nextUrl.pathname.startsWith('/dashboard')) {
        return Response.redirect(new URL('/', request.url))
    }
    if (!currentUser && request.nextUrl.pathname.startsWith('/blog/update')) {
        return Response.redirect(new URL('/', request.url))
    }
    if (!currentUser && request.nextUrl.pathname.startsWith('/blog/write')) {
        return Response.redirect(new URL('/', request.url))
    }
    if (!currentUser && request.nextUrl.pathname.startsWith('/message')) {
        return Response.redirect(new URL('/', request.url))
    }
    if (!currentUser && request.nextUrl.pathname.startsWith('/project/update')) {
        return Response.redirect(new URL('/', request.url))
    }
    if (!currentUser && request.nextUrl.pathname.startsWith('/project/write')) {
        return Response.redirect(new URL('/', request.url))
    }
    if (!currentUser && request.nextUrl.pathname.startsWith('/api')) {
        return Response.redirect(new URL('/', request.url))
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
*/
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    // Check for both local and secure session tokens
    const localSessionToken = request.cookies.get('next-auth.session-token')?.value
    const secureSessionToken = request.cookies.get('__Secure-next-auth.session-token')?.value

    // Use the appropriate session token based on environment
    const currentUser = localSessionToken || secureSessionToken
    const protectedPaths = [
        '/dashboard',
        '/blog/update',
        '/blog/write',
        '/message',
        '/project/update',
        '/project/write',
    ]

    const isProtectedPath = protectedPaths.some(path => request.nextUrl.pathname.startsWith(path))

    if (!currentUser && isProtectedPath) {
        return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|.*\\.png$).*)'],
}
