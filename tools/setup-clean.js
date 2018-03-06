/*jslint node: true */

"use strict";

const del = require('del');
const rimraf = require('rimraf');

const libPath = 'lib';

rimraf.sync('./build');
del.sync([libPath + '/*.*']);
