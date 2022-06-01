const fs = require('fs');
const path = require('path');
//
const chalk = require('chalk');
const svgstore = require('svgstore');
//
const config = require('./config');

module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
    ? '/proportions/'
    : '/',

	pages: {
		index: {
			// entry for the page
			entry: 'src/main.js',
			title: 'Proportions, but nicer.',
		},
	},

	chainWebpack: webpackConfig => {

		// Build a SVG Sprite during build
		if (fs.existsSync(config.svgstore.src)) {
			console.log(chalk.green('\nCreating a SVG Sprite'));
			let sprite = svgstore();
			let icons = 0;

			fs.readdir(config.svgstore.src, (err, files) => {
				if (err) throw err;

				files.forEach(file => {
					let filePath = `${config.svgstore.src}/${file}`;
					let isFile = fs.statSync(filePath).isFile();
					let isSvg = path.extname(file) == '.svg';

					if (isFile && isSvg) {
						icons ++;
						sprite.add(path.basename(file, '.svg'), fs.readFileSync(filePath, 'utf8'))
					}
				});

				// If there's some icons, create the file
				if (icons) {
					console.log(chalk.green(`\nFound ${icons} ${icons > 1 ? 'icons' : 'icon'}. Creating Sprite...`));
					fs.writeFile(config.svgstore.dest, sprite, () =>
						console.log(chalk.green.bold(`\n✓ Sprite successfully created `)));
				} else {
					console.log(chalk.yellow(`\nFound ${icons} icons. Skipping Sprite...`));
				}

			});
		}


	},
};
