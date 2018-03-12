/*jslint node: true */

"use strict";

const fs = require('fs');

const libPath = 'lib';
const libName = 'angular-preflight';

let packageContent = fs.readFileSync('package.json').toString();

const packageJson = JSON.parse(packageContent);

packageJson.main = libName + '.js';
packageJson.types = libName + '.d.ts';
packageJson.peerDependencies = packageJson.dependencies;

delete packageJson.scripts;
delete packageJson.dependencies;
delete packageJson.devDependencies;

let packageKeys = Object.keys(packageJson).sort();
let orderedPackage = {};

packageKeys.forEach(function(key) {
  orderedPackage[key] = packageJson[key];
});

packageContent = JSON.stringify(orderedPackage, null, 2);

fs.writeFileSync(libPath + '/package.json', packageContent);
