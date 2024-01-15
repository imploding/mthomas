const postcssPresetEnv = require('postcss-preset-env');
const csso = require('postcss-csso');

module.exports = {
  plugins: [
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
