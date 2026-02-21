import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
  },
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.clerk.accounts.dev clerk.com blob:; worker-src 'self' blob:; connect-src 'self' *.clerk.accounts.dev clerk.com *; img-src 'self' data: ik.imagekit.io img.clerk.com api.qrserver.com i.pinimg.com upload.wikimedia.org user-images.githubusercontent.com www.transparenttextures.com grainy-gradients.vercel.app; style-src 'self' 'unsafe-inline'; font-src 'self' data:; frame-src 'self' www.google.com maps.google.com drive.google.com docs.google.com dropbox.com onedrive.live.com; frame-ancestors 'none';"
  }
];

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  images: {
    minimumCacheTTL: 60,
    formats: ['image/avif', 'image/webp'],
    qualities: [20, 75, 80, 85, 90, 95, 100],
    // Workaround for runtime optimizer rejecting remotePatterns in some builds.
    // Keep domains aligned with remotePatterns.
    domains: [
      'ik.imagekit.io',
      'img.clerk.com',
      'api.qrserver.com',
      'i.pinimg.com',
      'upload.wikimedia.org',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.qrserver.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
