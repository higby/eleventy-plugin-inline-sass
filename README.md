# Elventy Plugin Inline Sass

## Installation

1) Install with npm

```bash
  npm i eleventy-plugin-inline-sass
```

2) Add to Eleventy config file

```js
const pluginInlineSass = require('eleventy-plugin-inline-sass')

eleventyConfig.addPlugin(pluginInlineSass)
```
## Usage/Examples

This plugin adds `.scss` files to be used per page and per directory as indicated in the [docs](https://www.11ty.dev/docs/data-template-dir/).

1) Template Example

With this file structure:

```
folder/
├─ index.md
├─ index.scss
```

The variable `{{ sass }}` containing the compiled Sass from `index.scss` will be available to `index.md`

2) Directory Example

With this file structure:

```
folder/
├─ folder.scss
├─ index.md
├─ other.md
```

The variable `{{ sass }}` containing the compiled Sass from `folder.scss` will be available to every templated page contained in `folder/`

3) Global Imports

By default using `@import` or `@use` within any Sass file will have it look in your Eleventy's include folder 

4) Global Data

This is an opitional feature and can be enabled via:

```js
  eleventyConfig.addPlugin(pluginInlineSass, {
    globalPath: '/example/path.scss'
  })
```

Doing this exposes the compiled Sass from the specified file to every page rendered with Eleventy as `{{ global.sass }}`

(The path starts from your Eleventy config file)

## Options

1) Sass Compiler

The plugin uses Sass' `compileString` and any options it takes can be given thusly:

```js
  eleventyConfig.addPlugin(pluginInlineSass, {
    compile: {
        style: "expanded",
        loadPaths: ['example/']
    }
  })
```

(The default style is "compressed")

Modifying the `loadPaths` item is how you can change where Sass searches for `@import` and `@use`.

2) Global variable

You can change the global variable from `global` via:

```js
  eleventyConfig.addPlugin(pluginInlineSass, {
    globalVar: 'examplevar'
  })
```

So now it can be used with `{{ examplevar.sass }}`.

## Caveats

- At the moment Eleventy Template Data and Directory Data don't deep merge, meaning that you cannot do both template and directory at the same time. If you do, the template data will take priority.
- If you're using Nunjucks you'll want need to escape the var with the `safe` filter. e.g. `{{ sass | safe }}`

## Running Tests

To run tests, run the following command

```bash
  npm run test
```