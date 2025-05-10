/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'assets-global.website-files.com',
      },
      {
        protocol: 'https',
        hostname: 'logos-world.net',
      },
      {
        protocol: 'https',
        hostname: 'blog.logomyway.com',
      },
      {
        protocol: 'https',
        hostname: 'download.logo.wine',
      },
      {
        protocol: 'https',
        hostname: 'cdn.worldvectorlogo.com',
      },
    ],
  },
}

export default nextConfig

