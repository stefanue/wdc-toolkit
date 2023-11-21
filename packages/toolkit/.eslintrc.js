module.exports = {
	extends: ['@wdc/eslint-config/node', '@wdc/eslint-config/jest'],
	rules: {
		'global-require': 'off',
		'import/no-dynamic-require': 'off',
		'no-process-exit': 'off',
	},
};
