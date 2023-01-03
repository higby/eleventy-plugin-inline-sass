# Elventy Plugin Inline Sass

## Installation

1. Install with npm

```bash
  npm i eleventy-plugin-inline-sass
```

2. Add to Eleventy config file

```js
const pluginInlineSass = require('eleventy-plugin-inline-sass')

eleventyConfig.addPlugin(pluginInlineSass)
```

## Usage/Examples

This plugin adds `.scss` files to be used per page and per directory as indicated in the [docs](https://www.11ty.dev/docs/data-template-dir/).

1. Template Example

With this file structure:

```
folder/
├─ index.md
├─ index.scss
```

The variable `{{ scss }}` containing the compiled Sass from `index.scss` will be available to `index.md`

2. Directory Example

With this file structure:

```
folder/
├─ folder.scss
├─ index.md
├─ other.md
```

The variable `{{ scss }}` containing the compiled Sass from `folder.scss` will be available to every templated page contained in `folder/`

## Options

1. Sass Compiler

The plugin uses Sass' `compileString` and any options it takes can be given like so:

```js
eleventyConfig.addPlugin(pluginInlineSass, {
  compiler: {
    style: 'expanded',
    loadPaths: ['example/']
  }
})
```

(The default style is "compressed")

Modifying the `loadPaths` item is how you can change where Sass searches for `@import` and `@use`.

2. Key Name

You can change the variable from `scss` via:

```js
eleventyConfig.addPlugin(pluginInlineSass, {
  key: 'scoobydoo'
})
```

So now it can be used with `{{ scoobydoo }}`.

Be careful to not name it something already used by Eleventy such as `page`.

## Caveats

- At the moment Eleventy Template Data and Directory Data don't deep merge, meaning that you cannot do both template and directory at the same time. If you do, the template data will take priority.
- If you're using Nunjucks you'll want need to escape the var with the `safe` filter. e.g. `{{ scss | safe }}`

## Running Tests

To run tests, run the following command

```bash
  npm run test
```
