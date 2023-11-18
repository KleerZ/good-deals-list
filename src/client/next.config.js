/** @type {import('next').NextConfig} */
const path = require('path')
const dotenv = require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    SERVER_URL: process.env.SERVER_URL
  }
}

module.exports = nextConfig