const withPWA = (await import('next-pwa')).default({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
});

export default withPWA({
  experimental: { typedRoutes: true }
});
