// generated on 2016-07-13 using generator-webapp 2.1.0
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync');
const del = require('del');
const wiredep = require('wiredep').stream;
const fileInclude = require('gulp-file-include');
const ngAnnotate = require('gulp-ng-annotate');
const gulpif = require('gulp-if');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('styles', () => {
  return gulp.src('app/styles/*.scss')
  .pipe($.sass.sync({
    outputStyle: 'expanded',
    precision: 10,
    includePaths: ['.']
  }).on('error', $.sass.logError))
  .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
  .pipe(gulp.dest('.tmp/styles'))
  .pipe(reload({stream: true}));
});


gulp.task('prehtml', function() {
  return gulp.src('app/*.html')
  .pipe($.plumber({
    errorHandler: function (error) {
      console.log(error.toString());
      this.emit('end');
    }
  }))
  .pipe($.fileInclude({
    basepath: 'app/'
  }))
  .pipe(gulp.dest('.tmp/'))
  .pipe(reload({stream: true}));
});






gulp.task('images', () => {
  return gulp.src('app/images/**/*')
  .pipe($.cache($.imagemin({
    progressive: true,
    interlaced: true,
    svgoPlugins: [{cleanupIDs: false}]
  })))
  .pipe(gulp.dest('project/images'));
});



gulp.task('extras', () => {
  // gulp.src([
  //   'app/scripts/lang-base.js',
  //   'app/scripts/settings.js'
  //   ], {
  //     dot: true
  //   }).pipe(gulp.dest('project/scripts'));

  gulp.src([
    'app/scripts/libs/**/*.*'
    ], {
      dot: true
    }).pipe(gulp.dest('project/scripts/libs'));

  gulp.src([
    'app/data/**/*.*'
    ], {
      dot: true
    }).pipe(gulp.dest('project/data'));



gulp.task('serve', ['prehtml', 'styles', 'scripts', 'fonts'], () => {
  browserSync({
    notify: false,
    port: 9888,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      },
      //middleware: [
        //modRewrite(['!pdf|doc|docx|xls|xlsx|avi|webm|ogg|mp3|mp4|css|less|js|tpl|png|jpg|jpeg|gif|woff|woff2|tff|svg|eot$ /index.html [L]'])
      //]
    }
  });

  gulp.watch([
    'app/*.html',
    'app/images/**/*',
    '.tmp/fonts/**/*'
    ]).on('change', reload);

  
  gulp.watch('bower.json', ['wiredep', 'fonts']);
});

gulp.task('serve:project', () => {
  browserSync({
    notify: false,
    port: 9888,
    server: {
      baseDir: ['project']
    }
  });
});

gulp.task('serve:test', ['scripts'], () => {
  

  gulp.watch('app/**/*.js', ['scripts']);
  gulp.watch('test/**/*.js').on('change', reload);
  gulp.watch('test/**/*.js', ['lint:test']);
});

gulp.task('wiredep', () => {
  gulp.src('app/styles/*.scss')
  .pipe(wiredep({
    ignorePath: /^(\.\.\/)+/
  }))
  .pipe(gulp.dest('app/styles'));



gulp.task('default', ['clean'], () => {
  gulp.start('build');
});

gulp.task('remove:scripts', function () {
 
   .pipe(deleteLines({
      'filters': [
      /<script\s+src=["']views/i
      // /<script\s+type=["']text\/javascript["']\s+src=/i
      ]
    }))
  .pipe(gulp.dest('app/general'));
});