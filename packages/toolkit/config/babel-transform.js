/**
 * External dependencies
 */
const babelJest = require('babel-jest');

module.exports = babelJest.default.createTransformer({
	presets: [[require.resolve('@wdc/babel-preset-default'), { wordpress: true }]],
});
