/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optimizaciones
  swcMinify: true,
  // Configuración de TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },
  // Configuración de ESLint
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Configuración de webpack para path aliases
  webpack: (config, { isServer }) => {
    // Asegurar que los path aliases funcionen correctamente
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    return config
  },
  // Configuración de output
  output: undefined, // Dejar que Vercel maneje esto automáticamente
}

module.exports = nextConfig

