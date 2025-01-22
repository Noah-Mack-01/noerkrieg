/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [ { source: '/', destination: '/home', permanent: true} ]
  },
  serverExternalPackages: ["mongoose"]
};

module.exports = nextConfig;
