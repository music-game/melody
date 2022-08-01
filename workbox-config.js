module.exports = {
	globDirectory: ".",
	globPatterns: ["**/*.{js,png,html,json,ico,css,ts}"],
	swDest: "sw.js",
	ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
	maximumFileSizeToCacheInBytes: 5000000,
};
