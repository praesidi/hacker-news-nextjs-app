/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/news',
				destination: '/',
			},
		];
	},
};

module.exports = nextConfig;
