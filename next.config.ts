import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
};

const enableAnalyzer = process.env.ANALYZE === 'true';

const getConfig = async () => {
  if (enableAnalyzer) {
    const { default: withBundleAnalyzer } = await import('@next/bundle-analyzer');
    return withBundleAnalyzer({
      enabled: true,
    })(nextConfig);
  }

  return nextConfig;
};

export default getConfig();
