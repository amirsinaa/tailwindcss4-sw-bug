import type { NextConfig } from 'next'
import withPWA from '@ducanh2912/next-pwa'

const pwaConfig = {
	dest: 'public',
	register: true,
	skipWaiting: true,
	reloadOnOnline: false,
	cleanupOutdatedCaches: true,
	clientsClaim: true,
	maximumFileSizeToCacheInBytes: 20 * 1024 * 1024,
}

const nextConfig: NextConfig = {}

const configWithPWA = withPWA(pwaConfig)(nextConfig)

export default configWithPWA
