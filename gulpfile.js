var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCss = require('gulp-minify-css'),
    connect = require('gulp-connect');
    

// livereloud
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

//css
gulp.task('css', function () {
gulp.src('css/style.css')

    .pipe(autoprefixer({
			browsers: ['last 12 versions', 'ie 8'],
			cascade: false
		}))
   
    .pipe(minifyCss(''))
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('app/css'))
     .pipe(notify('so good work!'))
    .pipe(connect.reload());
});

//html
gulp.task('html', function() {
	gulp.src('app/index.html')
	.pipe(connect.reload());
})

//watch
gulp.task('watch', function() {
	gulp.watch('css/*.css', ['css'])
	gulp.watch('app/index.html', ['html'])
})
gulp.task('default', ['connect', 'html', 'css', 'watch']);