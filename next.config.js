/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	images: {
		domains: [
			'misc.scdn.co',
			'i.scdn.co',
			'geo-media.beatsource.com',
			'i1.sndcdn.com',
			'media.pitchfork.com',
			'seed-mix-image.spotifycdn.com',
			'tbvswgcbrilqlaxdsxii.supabase.co',
			'localhost:3000',
		],
	},
}

module.exports = nextConfig
