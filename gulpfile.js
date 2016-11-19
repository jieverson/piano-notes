const gulp = require('gulp')
const fileinclude = require('gulp-file-include')

gulp.task('default', function() {
  gulp.src(['./src/*.html'])
    .pipe(fileinclude({
      prefix: '@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});