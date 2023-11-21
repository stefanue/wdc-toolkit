module.exports = {
	extends: ['@wdcthemes/eslint-config/node', '@wdcthemes/eslint-config/jest'],
	rules: {
		'global-require': 'off',
		'import/no-dynamic-require': 'off',
		'no-process-exit': 'off',
	},
};
