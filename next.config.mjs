/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // Чтобы сайт работал в подпапке GitHub Pages: /CVBAZILEVSKAYA
  basePath: "/CVBAZILEVSKAYA",
  assetPrefix: "/CVBAZILEVSKAYA/",
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
