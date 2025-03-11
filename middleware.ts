import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextResponse } from 'next/server';
 
export async function middleware(request) {
    const session = getKindeServerSession(request);
    
    if (!(await session.isAuthenticated())) {
        return NextResponse.redirect(new URL('/api/auth/login?post_login_redirect_url=/dashboard', request.url));
    }

    return NextResponse.next(); // Allow access if authenticated
}
 
export const config = {
    matcher: ['/dashboard/:path*','/create-business'],
};
