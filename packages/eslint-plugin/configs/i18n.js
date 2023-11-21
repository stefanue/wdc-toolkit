module.exports = {
	plugins: ['@wdc'],
	rules: {
		'@wdc/valid-sprintf': 'error',
		'@wdc/i18n-translator-comments': 'error',
		'@wdc/i18n-text-domain': 'error',
		'@wdc/i18n-no-collapsible-whitespace': 'error',
		'@wdc/i18n-no-placeholders-only': 'error',
		'@wdc/i18n-no-variables': 'error',
		'@wdc/i18n-ellipsis': 'error',
	},
};
