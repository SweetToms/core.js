const fs = require('fs');

const pkg = JSON.parse(fs.readFileSync('./package.json'));

let banner = `
/*!
* `+ pkg.name + ` - ` + pkg.description + `
* `+ pkg.repository.url + `
*
* author `+ pkg.author + `
*
* version `+ pkg.version + `
*
* build Wed Aug 21 2019
*
* Copyright yelloxing
* Released under the `+ pkg.license + ` license
*
* Date:`+ new Date() + `
*/\n\n`;

fs.readdirSync('./dist').forEach((url) => {
    url = "./dist/" + url;
    const temp = fs.readFileSync(url);
    fs.writeFileSync(url, banner);
    fs.appendFileSync(url, temp);

    if (/\.min\./.test(url)) {
        fs.writeFileSync('./docs/libs/core.js', banner);
        fs.appendFileSync('./docs/libs/core.js', temp);
    }
});
