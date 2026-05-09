import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ["192.168.0.101", "192.168.0.101:3000", "localhost", "localhost:3000"],
};

export default nextConfig;
