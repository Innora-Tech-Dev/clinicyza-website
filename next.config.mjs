/** @type {import('next').NextConfig} */
const nextConfig = {
  // cacheComponents / partialPrefetching are disabled: Ant Design's CSS-in-JS
  // (@ant-design/cssinjs) uses Math.random() in its style cache, which
  // Cache Components prerendering rejects.
};

export default nextConfig;
