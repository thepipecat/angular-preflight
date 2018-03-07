/*jslint node: true */

"use strict";

const fs = require('fs');
const cp = require('copyfiles');

const libPath = 'lib';
const libName = 'angular-preflight';
const typesPath = 'build';
const files = ['index.umd.js', 'index.umd.min.js'];

files.forEach(file => {
  let path = libPath + '/' + file;
  let min = /\.min\./.test(file) ? '.min' : '';
  let content = fs.readFileSync(path).toString();

  content = content.replace('sourceMappingURL=' + file + '.map', 'sourceMappingURL=' + libName + min + '.js.map');

  fs.writeFileSync(path, content);
});

fs.renameSync(libPath + '/index.umd.js', libPath + '/' + libName + '.js');
fs.renameSync(libPath + '/index.umd.js.map', libPath + '/' + libName + '.js.map');

fs.renameSync(libPath + '/index.umd.min.js', libPath + '/' + libName + '.min.js');
fs.renameSync(libPath + '/index.umd.min.js.map', libPath + '/' + libName + '.min.js.map');

cp([typesPath + '/**/*.d.ts', './' + libPath], true, function(err) {
  if (err) console.error(err);
});
