let filePath = 'F:\\9.项目\\1.chartProject\\testData\\1111.xml'

const fs = require('fs');
let convert = require('xml-js');
let xml = fs.readFileSync(filePath,'utf-8');
let result1 = convert.xml2json(xml, {compact: true, spaces: 4});
console.log(result1);
