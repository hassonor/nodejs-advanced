const https = require('https');
const crypto = require("crypto");
const fs = require("fs");

const start = Date.now();

function doRequest() {

    https.request('https://www.google.com', res => {
        res.on('data', () => {
        });
        res.on('end', () => {
            console.log(Date.now() - start);
        });
    })
        .end();
}

function doHash(){
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512',
        () => {
            console.log(`Hash: ${Date.now() - start}ms`);
        });
}

doRequest();

fs.readFile('multitask.js','utf8',()=>{
    console.log('FS:', Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();


/*
first we will print the https console.log(line13), after that lines (19,32,33,34,35)
 */


