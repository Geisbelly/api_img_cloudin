const nextConfig = {
  reactStrictMode: true,
  env: {
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
    NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET_PRODUCT: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET_PRODUCT,
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'X-Requested-With, Content-Type, Authorization' },
        ],
      },
    ];
  },
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    // Personalize a configuração do Webpack aqui
    return config;
  },
};

module.exports = nextConfig;
