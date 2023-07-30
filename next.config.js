/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
	const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
	assetPrefix = `/${repo}/`
	basePath = `/${repo}`
}

const nextConfig = {
	reactStrictMode: true,
	env: {
		/* Expose Google API URL to client side */
		GOOGLE_BOOKS_API_VOLUMES_URL: process.env.GOOGLE_BOOKS_API_VOLUMES_URL,
		GOOGLE_BOOKS_API_FRONT_COVER_URL: process.env.GOOGLE_BOOKS_API_FRONT_COVER_URL,
	},
	images: {
		domains: ['books.google.com'],
	},
}

module.exports = {
	...nextConfig,
	assetPrefix: assetPrefix,
	basePath: basePath,
}
