const { readFile } = require('node:fs/promises')
const merge = require('lodash').merge
const sass = require('sass')

async function globalSASS(src) {
  try {
    return await readFile(src, { encoding: 'utf8' })
  } catch (err) {
    console.error(err.message)
  }
}

function compileSASS(data, options) {
  return {
    sass: sass.compileString(data, options.compile).css
  }
}

module.exports = (eleventyConfig, userOptions) => {
  const defaultOptions = {
    globalPath: false,
    globalVar: 'global',
    compile: {
      style: 'compressed',
      loadPaths: [
        `./${eleventyConfig.dir.input}/${eleventyConfig.dir.includes}/`
      ]
    }
  }
  const options = merge(defaultOptions, userOptions)

  if (options.globalPath) {
    eleventyConfig.addGlobalData(options.globalVar, async () => {
      const global = await globalSASS(options.globalPath)
      return compileSASS(global, options)
    })
  }

  eleventyConfig.addDataExtension('scss', contents =>
    compileSASS(contents, options)
  )
}
