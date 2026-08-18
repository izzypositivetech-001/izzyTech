import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['10.63.251.2', '10.63.251.2:3000', 'localhost', 'localhost:3000'],
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

