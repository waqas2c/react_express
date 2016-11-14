var gulp = require('gulp'),
  liveServer = require('gulp-live-server'),
  browserSync = require('browser-sync'),
  browserify = require('browserify'),
  reactify = require('reactify'),
  source = require('vinyl-source-stream')

gulp.task('live-server', function () {
  var server = new liveServer('./server/main.js')
  server.start()
})
gulp.task('bundle', ['copy'], function () {
  return browserify({
    entries: 'app/main.jsx',
    debug: true
  }).transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./.tmp'))
})
gulp.task('copy', function () {
  gulp.src(['app/*.css'])
    .pipe(gulp.dest('./.tmp'))
})
gulp.task('serve', ['live-server', 'bundle'], function () {
  browserSync.init(null, {proxy: 'http://localhost:3000',port: 9003})
})
