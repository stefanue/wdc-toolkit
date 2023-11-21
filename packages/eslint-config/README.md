# WDC Eslint Config


## Installation

Install [@wdcthemes/eslint-config](https://github.com/stefanue/wdc-toolkit/blob/master/packages/eslint-config/README.md) as a development dependency of your project:

```sh
npm install @wdcthemes/eslint-config --save-dev
```

## Available ESLint configs

### @wdcthemes/eslint-config

The default export contains common rules that are not specific to any framework or environment.

```js
// eslintrc.js
module.exports = {
	extends: ['@wdcthemes/eslint-config'],
};
```

### @wdcthemes/eslint-config/react

Extends `@wdcthemes/eslint-config` adding specific rules to React.

```js
// eslintrc.js
module.exports = {
	extends: ['@wdcthemes/eslint-config/react'],
};
```

### @wdcthemes/eslint-config/wordpress

Extends `@wdcthemes/eslint-config/react` adding the custom gutenberg rules from `@wordpress/eslint-plugin`.

*Note*: This is an optional dependency, if you want to use this set of rules you must install `@wordpress/eslint-plugin` first.

```bash
npm install --save-dev @wordpress/eslint-plugin
```

```js
// eslintrc.js
module.exports = {
	extends: ['@wdcthemes/eslint-config/wordpress'],
};
```

### @wdcthemes/eslint-config/node

Extends `@wdcthemes/eslint-config` adding specific rules to Node.js.

```js
// eslintrc.js
module.exports = {
	extends: ['@wdcthemes/eslint-config/node'],
};
```

### @wdcthemes/eslint-config/jest

Adds specific rules for the `jest` testing framework.

```js
// eslintrc.js
module.exports = {
	extends: ['@wdcthemes/eslint-config/react', '@wdcthemes/eslint-config/jest'],
};
```

### @wdcthemes/eslint-config/legacy

This legacy config contains only rules for ES5. It should be used for projects without babel that are still writing legacy JavaScript code.

```js
// eslintrc.js
module.exports = {
	extends: ['@wdcthemes/eslint-config/legacy'],
};
```

## Usage

In order to use this config, choose the one you want and add this configuration to your `package.json`:

```json
{
    "eslintConfig": {
        "extends": "@wdcthemes/eslint-config"
    }
}
```

Or add a `.eslintrc.js` file to your project root containing:
```js
module.exports = {
	extends: ['@wdcthemes/eslint-config'],
};
```

## TypeScript Support

If you want TypeScript support, make sure to install `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`

```sh
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

change the eslint parser to `@typescript-eslint/parser` and add the typescript plugin

```js
// eslintrc.js
module.exports = {
	parser: '@typescript-eslint/parser',
	extends: ['@wdcthemes/eslint-config/react'],
	plugins: ['@typescript-eslint'],
}
```

## VSCode integration

We recommend turning on VSCode settings to automatically run `eslint --fix` on save.

```json
"editor.codeActionsOnSave": {
   "source.fixAll.eslint": true,
}
```

This will automagically format your code once you save. You don't need VSCode prettier extension enabled or running on save as eslint will automatically run `prettier` for you.
