/*jslint node: true */

"use strict";

const del = require('del');
const rimraf = require('rimraf');

const tmpPath = '.tmp';
const libPath = 'lib';

rimraf.sync('./' + tmpPath);
del.sync([libPath + '/*', '!' + libPath + '/.gitkeep']);
