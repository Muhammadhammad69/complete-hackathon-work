import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from "jose";
const SECRET_KEY = process.env.TOKEN_KEY!;
const key = new TextEncoder().encode(SECRET_KEY);
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const token = request.cookies.get("token");
    if (!token) return NextResponse.redirect(new URL('/', request.url))

    try {
        const { payload } = await jwtVerify(token.value, key);
        // console.log("payload", payload);
        if (payload) return NextResponse.next()
    } catch (error) {
        console.log("error", error);
        return NextResponse.redirect(new URL('/', request.url))
    }
    // return NextResponse.redirect(new URL('/home', request.url))

}

// See "Matching Paths" below to learn more
export const config = {
    //   matcher: '/about/:path*',
    matcher: ["/user/profile", "/api/logout"],
}