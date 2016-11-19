const gulp = require('gulp')
const insert = require('gulp-insert')
const fileinclude = require('gulp-file-include')

gulp.task('default', function() {
  gulp.src(['./src/*.html'])
    .pipe(fileinclude({
      prefix: '@',
      basepath: '@file'
    }))
    .pipe(insert.prepend('<!-- THIS FILE WAS AUTOGENERATED!!! See ./src -->\n'))
    .pipe(gulp.dest('./'))
})