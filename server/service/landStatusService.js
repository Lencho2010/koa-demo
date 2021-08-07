// 关联查询服务
const dbHelper = require('../utils/postgres.js');
const regReplace = require('../utils/regexHelper')
const getColors = require('../utils/colorHelper')

const configName = "土地利用现状"
const {
    root
} = require('../parseConfig/parseConfig')(configName)//土地利用现状

const dataGroup = root.datagroup;

// 暂时设定，后面会把字典值从前端通过条件传入
const mapObj = {
    yearfilter: "2019",
    xzqhfilter: "110000",
    jb:"sj" //qg,sj,dsj,xj,xzj,cj
}

const queryFun = async (themeName, chartKey) => {

    const chartTheme = dataGroup.theme.find(item => item._attributes.name === themeName)
    const queryChart = chartTheme.chart.find(item => item._attributes.name === chartKey)
    const dataRef = chartTheme.datatable.find(item => item._attributes.name === queryChart._attributes.dataref)

    const querySql = dataRef._text;
    const parseSql = regReplace(querySql, mapObj);
    const tableData = await dbHelper.query(parseSql);
    const attribute = queryChart._attributes;
    const xAxis = attribute['field-x'].split(',');
    const x = xAxis[0];
    const colorCategroy = attribute.colorcategory;
    const colors = colorCategroy && getColors(colorCategroy);
    const xColors = colors && colors.map(c => {
            const retObj = {keys: {}, color: c.color}
            retObj.keys[x] = c.name
            return retObj
        })
    ;
    return {
        key: attribute.name,
        name: attribute.title,
        xAxis,
        yAxis: attribute['field-y'].split(','),
        colors: attribute['colors'] && attribute['colors'].split(';'),
        xColors,
        data: tableData.rows
    }
}

module.exports = queryFun