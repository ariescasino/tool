// const TerserPlugin = require('terser-webpack-plugin');
import TerserPlugin from "terser-webpack-plugin";
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import JavaScriptObfuscator from "webpack-obfuscator";
/** @type {import('next').NextConfig} */
let nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    workerThreads: true,
    cpus: 4,
    parallelServerCompiles: true,
    parallelServerBuildTraces: true,
    webpackBuildWorker: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  trailingSlash: false,
  images: {
    loader: "custom",
    loaderFile: "./jsdevlivr.js",
    minimumCacheTTL: 43200,
  },
  async rewrites() {
    return [
      {
        source: "/account/:path*",
        destination: "/src/app/account/:path*", 
      },
      {
        source: "/api/:path*",
        destination: "https://betapi.spaceplus.live/api/:path*",
      },
    ];
  },
  productionBrowserSourceMaps: false,
  webpack(config, { isServer }) {
    if (!isServer && process.env.NODE_ENV !== "development") {
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: true,
            mangle: true, 
          },
        })
      );
      config.plugins.push(
        new JavaScriptObfuscator(
          {
            rotateStringArray: true,
            stringArray: true,
            stringArrayThreshold: 0.75,
            splitStrings: true,
            simplify: true,
          },
          []
        )
      );
    }
    if (isServer) {
      config.resolve.alias["fs"] = false; // Giảm số lượng tệp fs mở
    }
    return config;
  },
};
if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
  nextConfig.remotePatterns = [
    {
      protocol: "https",
      hostname: "cdn.jsdelivr.net",
      pathname: "**",
    },
    {
      protocol: "https",
      hostname: "gwfd.qatgwawm.net",
      pathname: "**",
    },
  ];
}

export default nextConfig;
