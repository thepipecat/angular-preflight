const gulp = require('gulp');
const sass = require('node-sass');
const inline = require('gulp-inline-ng2-template');
const htmlmin = require('html-minifier');

const tsconfig = require('./tsconfig.json');

const INLINE_TEMPLATES = {
  SRC: './src/**/*.ts',
  DST: './.tmp',
  CFG: {
    base: '/src',
    target: tsconfig.compilerOptions.target,
    useRelativePaths: true,
    removeLineBreaks: true,
    templateProcessor: minifyHtml,
    styleProcessor: compileSass
  }
};

function minifyHtml(path, ext, file, callback) {
  try {
    let content = htmlmin.minify(file, {
      collapseWhitespace: true,
      caseSensitive: true,
      removeComments: true,
      removeRedundantAttributes: true
    });

    callback(null, content);
  } catch (err) {
    callback(err);
  }
}

function compileSass(path, ext, file, callback) {
  let compiled = sass.renderSync({
    file: path,
    outputStyle: 'compressed'
  });

  callback(null, compiled.css);
}

gulp.task('inline', () => {
  return gulp.src(INLINE_TEMPLATES.SRC)
    .pipe(inline(INLINE_TEMPLATES.CFG))
    .pipe(gulp.dest(INLINE_TEMPLATES.DST));
});
