const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const config = require('./config.json');
const sites = require('./credentials.json');

const directory = path.resolve(__dirname, './');
const imagesDirectory = path.join(directory, 'images');

fs.readdir(imagesDirectory, (err, files) => {
    if (err) throw err;
    for (const file of files) {
        fs.unlink(path.join(imagesDirectory, file), err => {
            if (err) throw err;
        });
    }
});

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    for (site in sites) {
        console.log(`Opening ${config[site].name}`);
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
        await page.screenshot({path: path.join(directory, `images/${config[site].name}.png`)});
    }
    await browser.close();
})();