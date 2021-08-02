const path = require("path");
const parseXml = require('../utils/parseXmlHelper');

const filePath = path.resolve('./data/邻近分析.xml')

module.exports = () => {
    const parseData = parseXml(filePath)
    // console.log(data);
    return parseData;
}