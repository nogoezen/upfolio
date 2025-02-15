import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fr'],
  // Used when no locale matches
  defaultLocale: 'en',
  // Always use locale prefix
  localePrefix: 'always'
});

export const config = {
  // Match all paths except api, _next, static files, etc.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}; 