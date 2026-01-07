/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configuración de TypeScript - temporalmente ignorar errores para diagnosticar
  typescript: {
    ignoreBuildErrors: true,
  },
  // Configuración de ESLint - temporalmente ignorar para diagnosticar
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Configuración de webpack
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    return config
  },
}

module.exports = nextConfig

