module.exports = {
  testMatch: ['**/?(*.)(spec|test).(js)?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/src/Setup.js'],
  setupFiles: ['<rootDir>/src/Setup.js'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  modulePaths: ['<rootDir>/src/'],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/@fuse',
    '<rootDir>/src/@lodash',
    '<rootDir>/src/app/store',
    '<rootDir>/src/sagas',
    '<rootDir>/src/@services',
    '<rootDir>/src/AssetStorageProvider.js',
    '<rootDir>/src/app/fuse-auth/sagas',
  ],
}
