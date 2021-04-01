const fs = require('fs');
const svgstore = require('svgstore');
const config = require('./config');

module.exports = {
	chainWebpack: webpackConfig => {

		// Build a SvgSprite during build
		var sprite = svgstore()
			.add('plus', fs.readFileSync(`${config.svgstore.src}/plus.svg`, 'utf8'))
			.add('minus', fs.readFileSync(`${config.svgstore.src}/minus.svg`, 'utf8'));

		fs.writeFileSync(config.svgstore.dest, sprite);
	},
};
