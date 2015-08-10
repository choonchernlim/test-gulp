# test-gulp

## 1 - JS - Basic Gulp structure

* `npm install`
* Create `gulpfile.js`
* Default task.
* `gulp.start()` vs `gulp.task( 'default', [task] )`;

## 2 - JS - Combining JS files with Browserify

* Inspect `dist/js/app.js`
* No different than running `./node_modules/browserify/bin/cmd.js src/js/a.js > dist/js/app.js`

## 3 - JS - Minified combined JS files

* Compare `app.js` vs `app.min.js`.

## 4 - CSS - SCSS files to CSS files

* Compare `app.scss` vs `app.css`.

## 5 - CSS - Vendor Prefixes

* Compare `app.scss` vs `app.css`.

## 6 - CSS - Minified CSS files

* Compare `app.css` vs `app.min.css`.

## 7 - Image - Optimize images

* Compare file sizes.

## 8 - Minify JS, Minify CSS, Optimize Images

* Putting all together.

## 9 - Watch for file changes

* Watchify.
* IntelliJ has trouble refreshing the files.

## 10 - browser-sync

* Android, iPad, Safari, Chrome
* Change CSS and JS
* Scroll feature
    * Copy `lorem ipsum` to `index.html`
* Show UI
    * Reload
    * Scroll to top
