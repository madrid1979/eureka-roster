const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

gulp.task('connect', function() {
  connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('sass', function(){
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'nested'
    })
    .on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions', 'ie >= 9', 'Android >= 2.3', 'ios >= 7']}))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browserSync', function() {
  browserSync.init({
      proxy: 'eureka.dev'
  })
});

gulp.task('watch', ['browserSync', 'sass'], function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./public/*.html', browserSync.reload);
  //gulp.watch('templates/*.php', browserSync.reload);
  //gulp.watch('parts/*.php', browserSync.reload);
});

gulp.task('build', ['sass'], function() {
  console.log('Gettin\' SASSY! Please hold.');
});

gulp.task('default', ['watch', 'sass']);