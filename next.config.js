/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    // API_URL: "https://next-zustand.vercel.app/",
  },
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "avatars.githubusercontent.com", "ui-avatars.com"],
  },
}

module.exports = nextConfig
