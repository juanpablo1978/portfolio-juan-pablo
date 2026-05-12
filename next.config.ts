import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./app/i18n/request.ts');

const nextConfig: NextConfig = {
  transpilePackages: ['yet-another-react-lightbox']
};

export default withNextIntl(nextConfig);
