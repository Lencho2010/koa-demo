const path = require("path");
const parseXml = require('../utils/parseXmlHelper');

const filePath = path.resolve('./data/ι»θΏεζ.xml')

module.exports = () => {
    const parseData = parseXml(filePath)
    // console.log(data);
    return parseData;
}