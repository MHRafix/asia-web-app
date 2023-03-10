/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'encrypted-tbn0.gstatic.com',
			'www.travelities.com',
			'www.deshghuri.com',
			'images.unsplash.com',
			'cdn-icons-png.flaticon.com',
		],
	},
};

module.exports = nextConfig;
