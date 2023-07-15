/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	env: {
		/* Expose Google API URL to client side */
		GOOGLE_BOOKS_API_VOLUMES_URL: process.env.GOOGLE_BOOKS_API_VOLUMES_URL,
	},
	images: {
		domains: ['books.google.com'],
	},
}

module.exports = nextConfig
