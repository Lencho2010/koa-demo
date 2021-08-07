const getOption = () => {
    const colorList0 = ["rgb(205,85,85)", "rgb(210,105,30)", "rgb(0,139,0)",
        "rgb(178,58,238)", "rgb(54,100,139)", "rgb(255,0,255)"];
    const originData = [5, 20, 36, 10, 10, 20];
    const seriesData = originData.map(d => ({ value: d, isChecked: false }));
    const option = {
        tooltip: {},
        legend: {
            data: ["销量"]
        },
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: "销量",
            type: "bar",
            data: seriesData,
            itemStyle: {
                //柱形图圆角，初始化效果
                borderRadius: [5, 5, 0, 0],
                label: {
                    show: true//是否展示
                    // textStyle: {
                    //     fontWeight:'bolder',
                    //     fontSize : '12',
                    //     fontFamily : '微软雅黑',
                    // }
                },
                color: function(params) {
                    return colorList0[params.dataIndex];
                }
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                }
            }
        }]
    };

    return option;
}

getOption()