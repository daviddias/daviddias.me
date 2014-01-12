all: dist/personalpage.css dist/personalpage.js

dist/personalpage.css: clientApp/css/*.scss
	node_modules/.bin/node-sass clientApp/css/personalpage.scss public/css/personalpage.css

dist/personalpage.js: clientApp/js/**/*.js
	node_modules/.bin/browserify -t brfs --debug -e clientApp/js/personalpage.js -o public/js/personalpage.js

clean:
	rm -f public/css/personalpage.css public/js/personalpage.js