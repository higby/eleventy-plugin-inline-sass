module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(require('../../eleventy.config.js'), {
    globalPath: './test/globalVar/_includes/global.scss',
    globalVar: 'scoobydoo'
  })

  return {
    dir: {
      input: './test/includesImport'
    }
  }
}
