// 关联查询服务
const dbHelper = require('../utils/postgres.js');
const regReplace = require('../utils/regexHelper')

const {
	root
} = require('../parseConfig/parseLinkQuery')()

const chartArr = root.chart;

// 暂时设定，后面会把字典值从前端通过条件传入
const mapObj = {
	analysisId: "b1a6b424-8965-4f60-be67-49f3d26875f4"
}

const queryFun = async (chartKey) => {
	const chart = chartArr.find(item => item._attributes.name === chartKey);
	if (!chart) return;
	const querySql = chart.datatable._text;
	const parseSql = regReplace(querySql, mapObj);
	const tableData = await dbHelper.query(parseSql);
	const attribute = chart._attributes

	return {
		key: attribute.name,
		name: attribute.title,
		xAxis: attribute['field-x'],
		yAxis: attribute['field-y'].split(','),
		data: tableData.rows
	}
}

module.exports = queryFun