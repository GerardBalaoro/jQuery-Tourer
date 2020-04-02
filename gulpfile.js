const { src, dest, parallel, watch } = require('gulp')
const sass = require('gulp-sass')
const cssnano = require('gulp-cssnano')
const babel = require('gulp-babel')
const rename = require('gulp-rename')
const minify = require('gulp-minify')

function js() {
	return src('src/js/script.js')
		.pipe(
			babel({
				presets: ['@babel/env'],
			})
		)
		.pipe(rename({ basename: 'jquery-tourer' }))
		.pipe(
			minify({
				ext: {
					min: '.min.js',
				},
				preserveComments: 'some'
			})
		)
		.pipe(dest('dist/'))
}

function css() {
	return src('src/sass/style.scss')
		.pipe(
			sass({
				includePaths: ['node_modules'],
				sourceMap: true,
			})
		)
		.pipe(rename({ basename: 'jquery-tourer' }))
		.pipe(dest('dist/'))
		.pipe(cssnano({
			discardComments: true
		}))
		.pipe(rename({ extname: '.min.css' }))
		.pipe(dest('dist/'))
}

exports.js = js
exports.css = css
exports.default = parallel(exports.js, exports.css)
exports.watch = function() {
	watch('src/**/*.js', exports.default)
}
