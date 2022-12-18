module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(require('../../eleventy.config.js'), {
    globalPath: './test/globalStyles/_includes/global.scss'
  })

  return {
    dir: {
      input: './test/includesImport'
    }
  }
}
