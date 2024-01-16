const postcssPresetEnv = require('postcss-preset-env');
const csso = require('postcss-csso');
const postcssGlobalData = require('@csstools/postcss-global-data');

module.exports = {
  plugins: [
		postcssGlobalData({
			files: [
				'src/lib/styles/custom-media.css',
				'src/lib/styles/colours.css',
				'src/lib/styles/sizes.css',
				'src/lib/styles/effects.css',
			]
		}),
    postcssPresetEnv({
			minimumVendorImplementations: 1,
			features: {
				'nesting-rules': true,
				'custom-media-queries': true,
				'media-query-ranges': true
			}
		}),
    csso()
  ]
}
