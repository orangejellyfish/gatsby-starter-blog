module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/test/jest-setup.js',
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.cache/',
  ],
};
