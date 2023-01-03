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

test('Local Data', async t => {
  let result = await eleventyRun('./test/localData')

  t.is(result[0].content, `body{background-color:red}body h1{font-size:1.65em}`)
})

test('Global Data', async t => {
  let result = await eleventyRun('./test/globalData')

  t.is(
    result[0].content,
    `body{background-color:violet}body h1{font-size:1.65em}`
  )
})

test('Compiler Config', async t => {
  let result = await eleventyRun('./test/compilerConfig')

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

test('Local Data With Import', async t => {
  let result = await eleventyRun('./test/includesImportLocal')

  t.is(
    result[0].content,
    `body{background-color:yellow}body h1{font-size:1.65em}`
  )
})

test('Global Data With Import', async t => {
  let result = await eleventyRun('./test/includesImportGlobal')

  t.is(
    result[0].content,
    `body{background-color:green}body h1{font-size:1.65em}`
  )
})

test('Custom Key Name', async t => {
  let result = await eleventyRun('./test/keyConfig')

  t.is(
    result[0].content,
    `body{background-color:blue}body h1{font-size:1.65em}`
  )
})

test('loadPaths Config', async t => {
  let result = await eleventyRun('./test/loadPathsConfig')

  t.is(
    result[0].content,
    `body{background-color:indigo}body h1{font-size:1.65em}`
  )
})
