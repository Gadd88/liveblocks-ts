import createMiddleware from 'next-intl/middleware';

//Acá vamos a colocar todas las rutas publicas
const publicPages = [
  "/",
  "/register",
  "/login",
  // (/secret requires auth)
];
 
export default createMiddleware({
  locales: ['en', 'es'],
 
  
  defaultLocale: 'es'
});
 
export const config = {
  matcher: ['/', '/(es|en)/:path*', '/register', '/login' ]
};