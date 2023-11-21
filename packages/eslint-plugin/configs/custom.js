module.exports = {
	plugins: ['@wdcthemes'],
	rules: {
		'@wdcthemes/no-unused-vars-before-return': 'error',
		'@wdcthemes/no-base-control-with-label-without-id': 'error',
		'@wdcthemes/no-unguarded-get-range-at': 'error',
		'@wdcthemes/no-global-active-element': 'error',
		'@wdcthemes/no-global-get-selection': 'error',
		'@wdcthemes/no-unsafe-wp-apis': 'error',
	},
	overrides: [
		{
			files: ['*.native.js'],
			rules: {
				'@wdcthemes/no-base-control-with-label-without-id': 'off',
				'@wdcthemes/i18n-no-flanking-whitespace': 'error',
				'@wdcthemes/i18n-hyphenated-range': 'error',
			},
		},
		{
			files: ['*.test.js', '**/test/*.js', 'packages/e2e-test-utils/**/*.js'],
			rules: {
				'@wdcthemes/no-global-active-element': 'off',
				'@wdcthemes/no-global-get-selection': 'off',
			},
		},
	],
};
