/*jslint node: true */

"use strict";

const fs = require('fs');
const cp = require('copyfiles');

const libPath = 'lib';

let mainPackage = JSON.parse(fs.readFileSync('package.json').toString());

let distPackage = {
  name: mainPackage.name,
  version: mainPackage.version,
  description: mainPackage.description,
  main: 'index.umd.min.js',
  module: 'index.js',
  keywords: mainPackage.keywords,
  author: mainPackage.author,
  contributors: mainPackage.contributors,
  license: mainPackage.license,
  repository: mainPackage.repository,
  homepage: mainPackage.homepage,
  bugs: mainPackage.bugs,
  peerDependencies: mainPackage.dependencies
};

fs.writeFileSync(libPath + '/package.json', JSON.stringify(distPackage, null, 2));

cp(['README.md', 'LICENSE', './' + libPath], true, function(err) {
  if (err) console.error(err);
});

let minIndex = fs.readFileSync(libPath + '/index.umd.min.js');

minIndex += '//# sourceMappingURL=index.umd.js.map';

fs.writeFileSync(libPath + '/index.umd.min.js', minIndex);
