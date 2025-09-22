import { auth } from '@/lib/auth';

export default auth((req) => {
  // The auth function will handle the authentication logic
});

export const config = {
  matcher: ['/trader/:path*', '/login'],
};