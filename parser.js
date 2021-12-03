
const puppeteer = require('puppeteer');

/*puppeteer.launch().then(async browser => {
    const page = await browser.newPage();
    await page.goto('https://sauveteurdudunkerquois.fr/18eme-siecle/');
    const elements = await page.evaluate(() => Array.from(document.getElementById("content").querySelectorAll(".entry h2, .entry a"), e => e.innerText));
    
    elements.forEach(element =>{
        
        console.log(JSON.stringify(element));
       
    });
     browser.close();
});*/
url = 'https://sauveteurdudunkerquois.fr/1825-1849/'
puppeteer.launch().then(async browser => {
    const page = await browser.newPage();
    await page.goto(url);
    const elements = await page.evaluate(() => Array.from(document.getElementById("content").querySelectorAll(".entry h2, .entry a"), e => e.innerText));
    
    elements.forEach(element =>{
        
        console.log(JSON.stringify(element));
       
    });
     browser.close();
});