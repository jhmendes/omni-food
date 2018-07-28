var gulp = require('gulp');

var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./resources/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./resources/css'));
});

var uglifycss = require('gulp-uglifycss');
 
gulp.task('css', function () {
  gulp.src('./resources/css/*.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('run', ['sass', 'css']);

gulp.task('watch', function () {
    gulp.watch('./resources/sass/*.scss', ['sass']);
    gulp.watch('./resources/css/*.css', ['css']);
});

gulp.task('default', ['run', 'watch']);