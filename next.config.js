/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "/",
  },
  i18n: {
    locales: ["ko", "en-US"],
    defaultLocale: "ko",
    localeDetection: false,
  },
};

export default nextConfig;
