var GulpKit = require('GulpKit');

GulpKit(function(kit) {
	kit.scss({
		source: './scss/app.scss',
		output: './chrome/css/flatbook.css'
	});

	kit.scss({
		source: './scss/options.scss',
		output: './chrome/css'
	});

    kit.browserSync();
});