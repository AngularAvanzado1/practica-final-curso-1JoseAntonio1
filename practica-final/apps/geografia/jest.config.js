module.exports = {
  name: 'geografia',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/geografia',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
