import { usePathname } from 'next/navigation'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtDecode } from "jwt-decode";


const AuthRoute=["/login"]

export async function middleware(request: NextRequest) {
const {pathname}=request.nextUrl;

const accessToken = request.cookies.get("accessToken")?.value;
 
// console.log(pathname);
let user;

// Decode token only if it exists
if (accessToken) {
  try {
    user = (await jwtDecode(accessToken));
  } catch (error) {
    console.error("Token decoding failed:", error);
  }
}
// console.log(user);
  if (user && user.userRole=="Admin") {
       if (AuthRoute.includes(pathname)) {
        return NextResponse.redirect(new URL('/admin', request.url))
       }
       
    }else{
        if (!AuthRoute.includes(pathname)) {
            return NextResponse.redirect(new URL("/login", request.url));
          }
    }

return NextResponse.next()

}
 

export const config = {
  matcher: ['/admin/:path*','/login']
}