#!/usr/local/bin/node
var request = require('then-request');
var fs = require('fs');
exports.get = function(url, data, outputFile) {
    request('GET', url, {form:data}).done((res)=> {
        fs.writeFileSync(outputFile, res.body);
    });
}

if(process.argv.length === 4){
    exports.get(process.argv[2], process.argv[3]);
} else if (process.argv.length === 5) {
    exports.get(process.argv[2], process.argv[3], process.argv[4]); 
} else {
    console.log('Usage: webcurl <url> <form data> <output file>\n       webcurl <url> <output file>')
}
