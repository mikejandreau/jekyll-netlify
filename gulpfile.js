var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    cp = require('child_process');

    // if on windows use jekyll.bat as child_process, if not use [jekyll]
    var jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";

// compile scss files, add vendor prefixes, and minify
// main.min.css is saved at root (for development) and _site (for live site)
gulp.task('css', function() {
  return sass('_scss/main.scss', { style: 'expanded' })
    .pipe(plumber())
    .pipe(autoprefixer('last 15 versions', '> 1%', 'ie 8', 'ie 7'))
    .pipe(gulp.dest('css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('css'))
    .pipe(gulp.dest('_site/css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(notify({ message: 'Styles task complete' }));
});

// check js files for errors (ignores jQuery), concatenate and minify js
// main.js is saved at root (for development) and _site (for live site)
gulp.task('js', function() {
  return gulp.src(['_scripts/libraries/jquery-2.2.4.js', '_scripts/main.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(gulp.dest('_site/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('clean', function() {
  return gulp.src(['css', 'js'], {read: false})
    .pipe(clean());
});

// build site, uses jekyll variable above to work cross-platform
gulp.task('jekyll-build', function (done) {
    return cp.spawn(jekyll, ['build'], {stdio: 'inherit'})
        .on('close', done);
});

// rebuild and do page reload
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

// launch server after build
gulp.task('browser-sync', ['jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        },
        host: "localhost"
    });
});

// watch styles and scripts, inject updated assets into browser
// watch site files, rebuild when file is changed, added, or deleted
gulp.task('watch', function() {
  gulp.watch('_scss/**/*.scss', ['css']);
  gulp.watch('_scripts/**/*.js', ['js']);
  gulp.watch(['index.html', '_includes/*.html', '_layouts/*.html', '*.md', '_posts/*'], ['jekyll-rebuild']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('css', 'js', 'browser-sync', 'watch');
});