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
        protocol: "http",
        hostname: "localhost:1337",
        port: "",
        pathname: "/**",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en-US", "fr", "nl-NL"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en-US",
  },
};

module.exports = nextConfig;
