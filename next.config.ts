/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // важно для Vercel
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/media/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/media/**',
      },
      // Для продакшена - добавьте домены вашего бэкенда
      {
        protocol: 'https',
        hostname: '*.railway.app',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: '*.onrender.com',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: '*.herokuapp.com',
        pathname: '/media/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    unoptimized: process.env.NODE_ENV === 'production', // важно для Vercel
  },
  // Отключаем TypeScript проверку при билде (опционально)
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
}

module.exports = nextConfig
