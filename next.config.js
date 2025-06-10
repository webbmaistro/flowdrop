module.exports = {
  typescript: {
    // Only check types in production builds
    ignoreBuildErrors: process.env.VERCEL_ENV === 'development'
  },
  eslint: {
    // Still run ESLint but don't fail builds for warnings
    ignoreDuringBuilds: false,
    dirs: ['app', 'components', 'lib']
  }
} 