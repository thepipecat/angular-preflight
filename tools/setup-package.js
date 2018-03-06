/*jslint node: true */

"use strict";

const fs = require('fs');

const libPath = 'lib';

let packageContent = fs.readFileSync('package.json').toString();

const packageJson = JSON.parse(packageContent);

packageJson.main = 'angular-preflight.js';
packageJson.types = 'angular-preflight.d.ts';
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
