"use strict";
var gulp        = require('gulp');
var wait        = require('gulp-wait');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('source/sass/style.scss')
    .pipe(wait(200))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('source/css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './source'
    },
    notify: false
  });
  gulp.watch('source/sass/**/*.scss', ['sass']);
  gulp.watch('source/*html').on('change', browserSync.reload);
});

gulp.task('watch', ['serve']);
