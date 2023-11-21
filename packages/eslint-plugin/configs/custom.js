module.exports = {
	plugins: ['@wdc'],
	rules: {
		'@wdc/no-unused-vars-before-return': 'error',
		'@wdc/no-base-control-with-label-without-id': 'error',
		'@wdc/no-unguarded-get-range-at': 'error',
		'@wdc/no-global-active-element': 'error',
		'@wdc/no-global-get-selection': 'error',
		'@wdc/no-unsafe-wp-apis': 'error',
	},
	overrides: [
		{
			files: ['*.native.js'],
			rules: {
				'@wdc/no-base-control-with-label-without-id': 'off',
				'@wdc/i18n-no-flanking-whitespace': 'error',
				'@wdc/i18n-hyphenated-range': 'error',
			},
		},
		{
			files: ['*.test.js', '**/test/*.js', 'packages/e2e-test-utils/**/*.js'],
			rules: {
				'@wdc/no-global-active-element': 'off',
				'@wdc/no-global-get-selection': 'off',
			},
		},
	],
};
