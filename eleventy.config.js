const merge = require('lodash').merge
const sass = require('sass')

module.exports = (eleventyConfig, userOptions) => {
  const defaultOptions = {
    key: 'scss',
    compiler: {
      style: 'compressed',
      loadPaths: [
        `./${eleventyConfig.dir.input}/${eleventyConfig.dir.includes}/`
      ]
    }
  }
  const options = merge(defaultOptions, userOptions)

  eleventyConfig.addDataExtension('scss', contents => {
    return {
      [options.key]: sass.compileString(contents, options.compiler).css
    }
  })
}
