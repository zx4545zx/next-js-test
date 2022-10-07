/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    'MYSQL_HOST': 'containers-us-west-61.railway.app',
    'MYSQL_PORT': '5805',
    'MYSQL_DATABASE': 'railway',
    'MYSQL_USER': 'root',
    'MYSQL_PASSWORD': 'cAjBaP9to8ArqiTEnIWG',
  },
}

module.exports = nextConfig