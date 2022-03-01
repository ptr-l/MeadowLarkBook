const portfinder = require('portfinder')
const puppeteer = require('puppeteer')

const app = require('../../../meadowlark.js')

let server = null
let port = null 

beforeEach(async () => {
    port = await portfinder.getPortPromise()
    server = app.listen(port)
})

afterEach(() => {
    server.close()
})

// Note: This is commented out due to puppeteer/enviorment issues on this PC's end, not due to testing issues as far as I can tell.
// test('home to about link working', async () => {
//     const browser = await puppeteer.launch({
//         ignoreDefaultArgs: ['--disable-extensions'],
//       })
//     const page = await browser.newPage()
//     await page.goto(`http://localhost:${port}`)
//     await Promise.all([
//         page.waitForNavigation(),
//         page.click('[data-test-id="about]'),
//     ])
//     expect(page.url()).toBe(`http://localhost:${port}/about`)
//     await browser.close()
// })
