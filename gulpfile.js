var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('./package.json').config;

gulp.task('test', function() {
  console.log(config);
});

gulp.task('sass', function () {
  return gulp.src(config.source.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('source/css'));
});

gulp.task('watch', function () {
  gulp.watch('source/sass/**/*.scss', ['sass']);
});
