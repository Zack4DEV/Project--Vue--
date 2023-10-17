/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  directories: {
    output: 'dist/electron',
  },
  publish: null,
  npmRebuild: false,
  files: [
    'dist/main/**/*',
    'dist/preload/**/*',
    'dist/common/**/*',
    'dist/render/**/*',
    'dist/render/app/**/*',
    'dist/render/loader/**/*',

  ],
}

module.exports = config
