module.exports = {
  setupFiles: ['./jestSetup.js'],
  testRegex: '.test.js',
  testPathIgnorePatterns: ['__snapshots__'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
