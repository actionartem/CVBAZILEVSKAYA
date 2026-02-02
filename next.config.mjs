/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const nextConfig = {
  output: "export",

  // Чтобы сайт работал в подпапке GitHub Pages: /CVBAZILEVSKAYA
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
