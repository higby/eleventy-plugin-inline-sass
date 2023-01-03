module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(require('../../eleventy.config.js'), {
    compiler: {
      style: 'expanded'
    }
  })
}
