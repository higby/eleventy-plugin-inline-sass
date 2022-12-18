const test = require('ava')
const Eleventy = require('@11ty/eleventy')

async function eleventyRun(src) {
  let elev = new Eleventy(src, false, {
    configPath: `${src}/eleventy.config.js`
  })
  return await elev.toJSON()
}

test('Control Test', async t => {
  let result = await eleventyRun('./test/_control')

  t.is(result[0].content, `There should be no styles`)
})

test('Default Config', async t => {
  let result = await eleventyRun('./test/defaultConfig')

  t.is(result[0].content, `body{background-color:red}body h1{font-size:1.65em}`)
})

test('User Config', async t => {
  let result = await eleventyRun('./test/userConfig')

  t.is(
    result[0].content,
    `body {
  background-color: orange;
}
body h1 {
  font-size: 1.65em;
}`
  )
})

test('Import From Includes', async t => {
  let result = await eleventyRun('./test/includesImport')

  t.is(
    result[0].content,
    `body{background-color:yellow}body h1{font-size:1.65em}`
  )
})

test('Global Styles', async t => {
  let result = await eleventyRun('./test/globalStyles')

  t.is(
    result[0].content,
    `body{background-color:green}body h1{font-size:1.65em}`
  )
})

test('Custom Global Var', async t => {
  let result = await eleventyRun('./test/globalVar')

  t.is(
    result[0].content,
    `body{background-color:blue}body h1{font-size:1.65em}`
  )
})
