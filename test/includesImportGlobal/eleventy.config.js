module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(require('../../eleventy.config.js'))

  return {
    dir: {
      input: './test/includesImportGlobal'
    }
  }
}
