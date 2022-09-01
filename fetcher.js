const fs = require('fs');

const url = process.argv[2];
const newLocalFilePath = process.argv[3];

const request = require('request');
request(url, function (error, response, content) {
    if (error) {
        console.log("error: ", error)
    }
    if (response && response.statusCode !== 200) {
        console.log('statusCode: ', response.statusCode);
    }

    fs.writeFile(newLocalFilePath, content, err => {
        if (err) throw err;
        console.log(`Downloaded and saved ${content.length} bytes to ${newLocalFilePath}`)
    });

});

