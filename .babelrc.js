'use strict';

const path = require('path');
const fs = require('fs');

// Fool Babel into importing the "default" export while allowing to have named exports
exports.__esModule = true;

// This will map every directory from src to be available
// in absolute imports so following will be possible:
// import * from 'services'
// import * from 'app' etc.
const srcDirectories = (srcpath =>
  fs.readdirSync(srcpath).filter(file => fs.lstatSync(path.join(srcpath, file)).isDirectory()))(
  './src',
);
const moduleAliases = srcDirectories.map(dir =>
  Object({
    src: './src/' + dir,
    expose: dir,
  }),
);

exports.default = {
  presets: ['env', 'react', 'stage-2'],
  plugins: ['react-require', 'preval', ['module-alias', [...moduleAliases]]],
};
