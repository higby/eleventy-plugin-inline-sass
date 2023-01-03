module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(require('../../eleventy.config.js'), {
    compiler: {
      loadPaths: ['././test/loadPathsConfig/styles/']
    }
  })
}
