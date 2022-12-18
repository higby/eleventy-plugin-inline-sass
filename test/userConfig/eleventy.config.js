module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(require('../../eleventy.config.js'), {
    compile: {
      style: 'expanded'
    }
  })
}
