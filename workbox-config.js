module.exports = {
	globDirectory: ".",
	globPatterns: [],
	swDest: "sw.js",
	ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
	maximumFileSizeToCacheInBytes: 5000000,
	runtimeCaching: [
		{
			urlPattern: /\.(?:html|css|js|json|png|wasm)$/,
			handler: "StaleWhileRevalidate",
			options: {
				cacheName: "assets",
			},
		},
	],
};
