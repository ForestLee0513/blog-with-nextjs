/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "/",
  },
  i18n: {
    locales: ["ko-KR", "en-US"],
    defaultLocale: "ko-KR",
    // localeDetection: true,
  },
};

export default nextConfig;
