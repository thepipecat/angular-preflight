export default {
  input: 'lib/index.js',
  external: [
    '@angular/core',
    '@angular/common'
  ],
  output: {
    format: 'umd',
    file: 'lib/index.umd.js',
    name: 'AngularPreflight',
    sourcemap: true,
    globals: {
      '@angular/core': 'ng.core',
      '@angular/common': 'ng.common'
    }
  }
};
