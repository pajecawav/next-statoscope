# Next.js + Statoscope

[![npm version](https://img.shields.io/npm/v/next-statoscope)](https://www.npmjs.com/package/next-statoscope)

Use [statoscope](https://github.com/statoscope/statoscope) in your Next.js project.

## Installation

```
npm install next-statoscope
```

or

```
yarn add next-statoscope
```

or

```
pnpm add next-statoscope
```

Note: if installing as a `devDependency` make sure to wrap the require in a `process.env` check as `next.config.js` is loaded during `next start` as well.

### Usage with environment variables

Create a `next.config.js` (and make sure you have `next-statoscope` set up)

```js
const withStatoscope = require("next-statoscope")({
    enabled: process.env.ANALYZE === "true",
});
module.exports = withStatoscope({});
```

Or configuration as a function:

```js
module.exports = (phase, defaultConfig) => {
    return withStatoscope(defaultConfig);
};
```

Then you can run the command below:

```bash
# Analyze is done on build when env var is set
ANALYZE=true yarn build
```

By default all HTML reports will be outputted to `<distDir>/statoscope/`.

#### Options

Full list of options is available in the [statoscope docs](https://github.com/statoscope/statoscope/tree/master/packages/webpack-plugin#usage).

To disable automatically opening the report in your default browser, set `open` to `false`:

```js
const withStatoscope = require("next-statoscope")({
    enabled: process.env.ANALYZE === "true",
    open: false,
});
module.exports = withStatoscope({});
```
