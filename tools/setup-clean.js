/*jslint node: true */

"use strict";

const del = require('del');
const rimraf = require('rimraf');

const buildPath = 'build';
const libPath = 'lib';

rimraf.sync('./' + buildPath);
del.sync([libPath + '/*', '!' + libPath + '/.gitkeep']);
