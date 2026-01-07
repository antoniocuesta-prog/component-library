/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configuración de TypeScript - temporalmente ignorar errores para ver si es el problema
  typescript: {
    ignoreBuildErrors: false,
  },
  // Configuración de ESLint
  eslint: {
    ignoreDuringBuilds: false,
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

