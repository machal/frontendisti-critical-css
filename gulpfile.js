'use strict';

var gulp = require('gulp'),
  less = require('gulp-less'),
  path = require('path'),
  rename = require('gulp-rename'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  cssmin = require('gulp-cssmin'),
  browserSync = require('browser-sync').create(),
  browserSyncReload = browserSync.reload,
  browserify = require('browserify'),
  debowerify = require('debowerify'),
  uglify = require('gulp-uglify');

// LESS kompilace + SourceMaps

gulp.task('less', function () {
  return gulp.src('./src/less/index.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(rename('style.css'))
    .pipe(autoprefixer({
            browsers: ['last 3 versions', 'ios 6', 'ie 7', 'ie 8', 'ie 9'],
            cascade: false
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSyncReload({stream: true}));
});

// CSS minifikace

gulp.task('cssmin', function () {
  return gulp.src('./dist/css/style.css')
    .pipe(cssmin())
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(gulp.dest('./dist/css/'));
});

// JS browserify
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/browserify-transforms.md
// TODO https://medium.com/@sogko/gulp-browserify-the-gulp-y-way-bb359b3f9623

// gulp.task('browserify', function () {
//   var b = browserify({
//       entries: './src/js/index.js',
//       debug: true,
//       transform: [debowerify]
//     });

//   return b.bundle()
//     .pipe(source('./src/js/index.js'))
//     .pipe(gulp.dest('./dist/js/'));
// });

// JS zmenseni

gulp.task('uglify', function () {
  return gulp.src('./dist/js/script.js')
    .pipe(uglify())
    .pipe(rename('script.min.js'))
    .pipe(gulp.dest('./dist/js/'))
});

// BrowserSync

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// Watch

gulp.task('watch', function() {
  gulp.watch('./src/less/**/*.less', ['less']);
});

// Meta tasky

gulp.task('css', ['less', 'cssmin']);
gulp.task('js', ['uglify']);
gulp.task('default', ['css', 'browser-sync', 'watch']);
