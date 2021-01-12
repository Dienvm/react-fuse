module.exports = {
	roots: ['<rootDir>', '<rootDir>/src'],
	modulePaths: ['<rootDir>', '<rootDir>/src'],
	moduleDirectories: ['node_modules'],
	testMatch: ['**/?(*.)(spec|test).js?(x)'],
	collectCoverageFrom: [
		'src/**/*.{js,jsx}',
		'!<rootDir>/node_modules/',
		'!<rootDir>/src/@fuse/**/*.js',
		'!<rootDir>/src/@lodash/**/*.js',
		'!<rootDir>/src/@history/**/*.js',
		'!<rootDir>/src/app/auth/**/*.js',
		'!<rootDir>/src/app/fuse-configs/**/*.js',
		'!<rootDir>/src/app/fuse-layouts/**/*.js',
	],
	setupFiles: ['<rootDir>/src/Setup.js'],
	moduleNameMapper: {
		'^@fuse$': '<rootDir>/src/@fuse',
	},
};
