'use strict';

var gulp = require("gulp"),
    jade = require('gulp-jade'),
    prettify = require('gulp-prettify'),
    wiredep = require('wiredep').stream,
    useref = require('gulp-useref'),    
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    gulpif = require('gulp-if'),
    filter = require('gulp-filter'),
    size = require('gulp-size'),
    imagemin = require('gulp-imagemin'),
    concatCss = require('gulp-concat-css'),
    minifyCss = require('gulp-minify-css'),
    browserSync = require('browser-sync'),
    gutil = require('gulp-util'),
    ftp = require('vinyl-ftp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    prefixer = require('gulp-autoprefixer'),
    notify = require("gulp-notify"),
    reload = browserSync.reload,
    livereload = require('gulp-livereload'),
    opn = require('opn');


// ====================================================
// ====================================================
// ============== Локальная разработка APP ============

// САСС
gulp.task('sass', function () {
  gulp.src('app/scss/main.scss')
  .pipe(plumber())
  .pipe(sass({errLogToConsole: true}))
  .pipe(gulp.dest('app/css'));
});

// слежка и запуск задач 
gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('app/scss/**/*.scss', ['sass']).on('change', livereload.changed);
  gulp.watch('app/css/*.css', ['rel']).on('change', livereload.changed);
  gulp.watch('app/js/*.js', ['rel']).on('change', livereload.changed);
  gulp.watch('app/*.php', ['rel']).on('change', livereload.changed);
});

gulp.task('rel', function () {
  console.log('sucess');
});


// Задача по-умолчанию 
gulp.task('default', ['watch']);


// ====================================================
// ====================================================
// ================= Сборка DIST ======================

// Очистка папки
gulp.task('clean', function () {
  return gulp.src('dist')
    .pipe(clean());
});

// Переносим HTML, CSS, JS в папку dist 
gulp.task('useref', function () {
  var assets = useref.assets(); 
  return gulp.src('app/*.php')
    .pipe(assets)
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', prefixer({browsers: ['last 25 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']})))
    .pipe(gulpif('*.css', minifyCss({compatibility: 'ie8'})))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('dist'));
});

// Перенос шрифтов
gulp.task('fonts', function() {
  gulp.src('app/fonts/*')
    .pipe(filter(['*.eot','*.svg','*.ttf','*.woff','*.woff2']))
    .pipe(gulp.dest('dist/fonts'))
});

// Картинки
gulp.task('images', function () {
  return gulp.src('app/img/**/*')
    .pipe(imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('dist/img'));
});

// Остальные файлы, такие как favicon.ico и пр.
gulp.task('extras', function () {
  return gulp.src([
    'app/*.*',
    '!app/*.html'
  ]).pipe(gulp.dest('dist/'));
});

// Сборка и вывод размера содержимого папки dist
gulp.task('dist', ['useref', 'images', 'fonts', 'extras'], function () {
  return gulp.src('dist/**/*').pipe(size({title: 'build'}));
});

// Собираем папку DIST (только после компиляции Jade)
gulp.task('build', ['clean', 'sass'], function () {
  gulp.start('dist');
});

// ====================================================
// ====================================================
// ===================== Функции ======================

// Более наглядный вывод ошибок
var log = function (error) {
  console.log([
    '',
    "----------ERROR MESSAGE START----------",
    ("[" + error.name + " in " + error.plugin + "]"),
    error.message,
    "----------ERROR MESSAGE END----------",
    ''
  ].join('\n'));
  this.end();
}


// ====================================================
// ====================================================
// ===== Отправка проекта на сервер ===================

gulp.task( 'deploy', function() {

  var conn = ftp.create( {
      host:     '',
      user:     '',
      password: '',
      parallel: 10,
      log: gutil.log
  } );

  var globs = [
      'dist/**/*'
  ];

  return gulp.src(globs, { base: 'dist/', buffer: false })
    .pipe(conn.dest( 'public_html/'));

});





// ====================================================
// ====================================================
// =============== Важные моменты  ====================
// gulp.task(name, deps, fn) 
// deps - массив задач, которые будут выполнены ДО запуска задачи name
// внимательно следите за порядком выполнения задач!



// ====================================================
// ====================================================
// =============== PHP моменты  ====================

//var gulp = require('gulp'),
//    livereload = require('gulp-livereload'),
//    opn = require('opn');
//
//// css
//gulp.task('css', function () {
//    livereload.changed();
//});
//
//// php
//gulp.task('php', function () {
//    livereload.changed();
//})
//
//// js
//gulp.task('js', function () {
//    livereload.changed();
//});
//
//// watch
//gulp.task('watch', function () {
//    livereload.listen();
//    opn('http://dz1_2710/');
//    gulp.watch('app/styles/*.css', ['css']);
//    gulp.watch('app/scripts/*.js', ['js']);
//    gulp.watch('app/*.php', ['php']);
//});
//
//// default
//gulp.task('default', ['watch']);