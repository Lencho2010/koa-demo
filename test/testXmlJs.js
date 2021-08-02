const path = require("path");
const fs = require("fs");
const convert = require("xml-js");

const filePath = path.resolve('../data/邻近分析.xml')
console.log(filePath);

let xml = fs.readFileSync(filePath,'utf-8');
let result1 = convert.xml2json(xml, {compact: true, spaces: 4});
console.log(result1);
//console.log(JSON.parse(result1));

// let filePath = 'F:\\9.项目\\1.chartProject\\testData\\1111.xml'

// const fs = require('fs');
// let convert = require('xml-js');
// let xml = fs.readFileSync(filePath,'utf-8');
// let result1 = convert.xml2json(xml, {compact: true, spaces: 4});
// console.log(JSON.parse(result1));
// console.log(result1);
