'use strict';

var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    opn = require('opn');

// css
gulp.task('css', function () {
  livereload.changed();
});

// php
gulp.task('php', function () {
  livereload.changed();
})

// js
gulp.task('js', function () {
    livereload.changed();
});

// watch
gulp.task('watch', function () {
  livereload.listen();
  opn('http://dz1_2710/');
  gulp.watch('app/styles/*.css', ['css']);
  gulp.watch('app/scripts/*.js', ['js']);
  gulp.watch('app/*.php', ['php']);
});

// default
gulp.task('default', ['watch']);
