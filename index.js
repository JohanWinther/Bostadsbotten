const config = require('./config.json')
const sites = require('./credentials.json')
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    for (site in sites) {
        await page.goto(config[site].url);
        for (step of config[site].steps) {
            if (step.action === 'type') {
                await page[step.action](step.selector, sites[site][step.field]);
            } else if (step.action === 'click') {
                await Promise.all([
                    page.waitForNavigation(),
                    page[step.action](step.selector)
                ]);
            }
            await page.waitFor(1);
        }
        await page.screenshot({path: path.join(path.resolve(__dirname, './'), `images/${config[site].name}.png`)});
    }
    await browser.close();
})();