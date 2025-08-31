const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  basePath: "",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "15.222.63.205",
        port: "",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "dev-content.sses.pk",
        port: "",
        pathname: "/**",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
