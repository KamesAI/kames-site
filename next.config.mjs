/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // On optimise pour éviter les soucis avec Three.js si besoin
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
};

export default nextConfig;