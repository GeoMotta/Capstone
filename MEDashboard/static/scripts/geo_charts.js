/* ECHRTS */


function init_echarts() {

    if (typeof (echarts) === 'undefined') { return; }
    console.log('init_echarts');


    var theme = {
        color: [
            '#26B99A', '#34495E', '#BDC3C7', '#3498DB',
            '#9B59B6', '#8abb6f', '#759c6a', '#bfd3b7'
        ],

        title: {
            itemGap: 8,
            textStyle: {
                fontWeight: 'normal',
                color: '#408829'
            }
        },

        dataRange: {
            color: ['#1f610a', '#97b58d']
        },

        toolbox: {
            color: ['#408829', '#408829', '#408829', '#408829']
        },

        tooltip: {
            backgroundColor: 'rgba(0,0,0,0.5)',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    color: '#408829',
                    type: 'dashed'
                },
                crossStyle: {
                    color: '#408829'
                },
                shadowStyle: {
                    color: 'rgba(200,200,200,0.3)'
                }
            }
        },

        dataZoom: {
            dataBackgroundColor: '#eee',
            fillerColor: 'rgba(64,136,41,0.2)',
            handleColor: '#408829'
        },
        grid: {
            borderWidth: 0
        },

        categoryAxis: {
            axisLine: {
                lineStyle: {
                    color: '#408829'
                }
            },
            splitLine: {
                lineStyle: {
                    color: ['#eee']
                }
            }
        },

        valueAxis: {
            axisLine: {
                lineStyle: {
                    color: '#408829'
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
                }
            },
            splitLine: {
                lineStyle: {
                    color: ['#eee']
                }
            }
        },
        timeline: {
            lineStyle: {
                color: '#408829'
            },
            controlStyle: {
                normal: { color: '#408829' },
                emphasis: { color: '#408829' }
            }
        },

        k: {
            itemStyle: {
                normal: {
                    color: '#68a54a',
                    color0: '#a9cba2',
                    lineStyle: {
                        width: 1,
                        color: '#408829',
                        color0: '#86b379'
                    }
                }
            }
        },
        map: {
            itemStyle: {
                normal: {
                    areaStyle: {
                        color: '#ddd'
                    },
                    label: {
                        textStyle: {
                            color: '#c12e34'
                        }
                    }
                },
                emphasis: {
                    areaStyle: {
                        color: '#99d2dd'
                    },
                    label: {
                        textStyle: {
                            color: '#c12e34'
                        }
                    }
                }
            }
        },
        force: {
            itemStyle: {
                normal: {
                    linkStyle: {
                        strokeColor: '#408829'
                    }
                }
            }
        },
        chord: {
            padding: 4,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 1,
                        color: 'rgba(128, 128, 128, 0.5)'
                    },
                    chordStyle: {
                        lineStyle: {
                            width: 1,
                            color: 'rgba(128, 128, 128, 0.5)'
                        }
                    }
                },
                emphasis: {
                    lineStyle: {
                        width: 1,
                        color: 'rgba(128, 128, 128, 0.5)'
                    },
                    chordStyle: {
                        lineStyle: {
                            width: 1,
                            color: 'rgba(128, 128, 128, 0.5)'
                        }
                    }
                }
            }
        },
        gauge: {
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                show: true,
                lineStyle: {
                    color: [[0.2, '#86b379'], [0.8, '#68a54a'], [1, '#408829']],
                    width: 8
                }
            },
            axisTick: {
                splitNumber: 10,
                length: 12,
                lineStyle: {
                    color: 'auto'
                }
            },
            axisLabel: {
                textStyle: {
                    color: 'auto'
                }
            },
            splitLine: {
                length: 18,
                lineStyle: {
                    color: 'auto'
                }
            },
            pointer: {
                length: '90%',
                color: 'auto'
            },
            title: {
                textStyle: {
                    color: '#333'
                }
            },
            detail: {
                textStyle: {
                    color: 'auto'
                }
            }
        },
        textStyle: {
            fontFamily: 'Arial, Verdana, sans-serif'
        }
    };


    //echart Bar

    if ($('#mainb').length) {

        var echartBar = echarts.init(document.getElementById('mainb'), theme);

        echartBar.setOption({
            title: {
                text: 'Graph title',
                subtext: 'Graph Sub-text'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['sales', 'purchases']
            },
            toolbox: {
                show: false
            },
            calculable: false,
            xAxis: [{
                type: 'category',
                data: ['1?', '2?', '3?', '4?', '5?', '6?', '7?', '8?', '9?', '10?', '11?', '12?']
            }],
            yAxis: [{
                type: 'value'
            }],
            series: [{
                name: 'sales',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                markPoint: {
                    data: [{
                        type: 'max',
                        name: '???'
                    }, {
                        type: 'min',
                        name: '???'
                    }]
                },
                markLine: {
                    data: [{
                        type: 'average',
                        name: '???'
                    }]
                }
            }, {
                name: 'purchases',
                type: 'bar',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                markPoint: {
                    data: [{
                        name: 'sales',
                        value: 182.2,
                        xAxis: 7,
                        yAxis: 183,
                    }, {
                        name: 'purchases',
                        value: 2.3,
                        xAxis: 11,
                        yAxis: 3
                    }]
                },
                markLine: {
                    data: [{
                        type: 'average',
                        name: '???'
                    }]
                }
            }]
        });

    }

    //echart Gauge
    // Temperature gauge
    if ($('#echart_gauge').length) {
        var echartGauge = echarts.init(document.getElementById('echart_gauge'), theme);
        echartGauge.setOption({
            tooltip: {
                formatter: "{a} <br/>{b} : {c}%"
            }
            , toolbox: {
                show: true
                , feature: {
                    restore: {
                        show: true
                        , title: "Restore"
                    }
                    , saveAsImage: {
                        show: true
                        , title: "Save Image"
                    }
                }
            }
            , series: [
                {
                    name: 'Temp',
                    type: 'gauge',
                    splitNumber: 10,
                    axisLine: {
                        lineStyle: { //lineStyle
                            color: [[0.2, '#228b22'], [0.8, '#48b'], [1, '#ff4500']]
                            , width: 8
                        }
                    }
                    , axisTick: {
                        splitNumber: 10,
                        length: 12,
                        lineStyle: {
                            color: 'auto'
                        }
                    }
                    , axisLabel: { //axis.axisLabel
                        textStyle: { //TEXTSTYLE
                            color: 'auto'
                        }
                    }
                    , splitLine: {
                        show: true,
                        length: 30, //length
                        lineStyle: {//lineStyle
                            color: 'auto'
                        }
                    }
                    , pointer: {
                        width: 5
                    }
                    , title: {
                        show: true
                        , offsetCenter: [0, '68%'], // x, y, px
                        textStyle: { //TEXTSTYLE
                            fontWeight: 'bolder',
                            color: '#1ef',
                            fontSize: 16,
                        }
                    },
                    detail: {
                        formatter: '{value}%'
                       , textStyle: { //TEXTSTYLE
                           color: 'auto'
                           , fontWeight: 'bolder'
                       }
                    }
                    , data: [{
                        value: 10,
                        name: 'Temperature'
                    }]
                }
            ]
        });
    }


    //Humidity gauge
    if ($('#echart_gauge_humidity').length) {
        var echartGauge = echarts.init(document.getElementById('echart_gauge_humidity'), theme);
        echartGauge.setOption({
            tooltip: {
                formatter: "{a} <br/>{b} : {c}%"
            }
            , toolbox: {
                show: true
                , feature: {
                    restore: {
                        show: true
                        , title: "Restore"
                    }
                    , saveAsImage: {
                        show: true
                        , title: "Save Image"
                    }
                }
            }
            , series: [
                {
                    name: 'Temp',
                    type: 'gauge',
                    splitNumber: 10,
                    axisLine: {
                        lineStyle: { //lineStyle
                            color: [[0.2, '#228b22'], [0.8, '#48b'], [1, '#ff4500']]
                            , width: 8
                        }
                    }
                    , axisTick: {
                        splitNumber: 10,
                        length: 12,
                        lineStyle: {
                            color: 'auto'
                        }
                    }
                    , axisLabel: { //axis.axisLabel
                        textStyle: { //TEXTSTYLE
                            color: 'auto'
                        }
                    }
                    , splitLine: {
                        show: true,
                        length: 30, //length
                        lineStyle: {//lineStyle
                            color: 'auto'
                        }
                    }
                    , pointer: {
                        width: 5
                    }
                    , title: {
                        show: true
                        , offsetCenter: [0, '68%'], // x, y, px
                        textStyle: { //TEXTSTYLE
                            fontWeight: 'bolder',
                            color: '#1ef',
                            fontSize: 16,
                        }
                    },
                    detail: {
                        formatter: '{value}%'
                       , textStyle: { //TEXTSTYLE
                           color: 'auto'
                           , fontWeight: 'bolder'
                       }
                    }
                    , data: [{
                        value: 50,
                        name: 'Humidity'
                    }]
                }
            ]
        });
    }



    //echart Line

    if ($('#echart_line').length) {

        var echartLine = echarts.init(document.getElementById('echart_line'), theme);

        echartLine.setOption({
            title: {
                text: 'Line Graph',
                subtext: 'Subtitle'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                x: 220,
                y: 40,
                data: ['Intent', 'Pre-order', 'Deal']
            },
            toolbox: {
                show: true,
                feature: {
                    magicType: {
                        show: true,
                        title: {
                            line: 'Line',
                            bar: 'Bar',
                            stack: 'Stack',
                            tiled: 'Tiled'
                        },
                        type: ['line', 'bar', 'stack', 'tiled']
                    },
                    restore: {
                        show: true,
                        title: "Restore"
                    },
                    saveAsImage: {
                        show: true,
                        title: "Save Image"
                    }
                }
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }],
            yAxis: [{
                type: 'value'
            }],
            series: [{
                name: 'Deal',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data: [10, 12, 21, 54, 260, 830, 710]
            }, {
                name: 'Pre-order',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data: [30, 182, 434, 791, 390, 30, 10]
            }, {
                name: 'Intent',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data: [1320, 1132, 601, 234, 120, 90, 20]
            }]
        });

    }

    
    //echart Bar Horizontal

    if ($('#echart_bar_horizontal').length) {

        var echartBar = echarts.init(document.getElementById('echart_bar_horizontal'), theme);

        echartBar.setOption({
            title: {
                text: 'Bar Graph',
                subtext: 'Graph subtitle'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                x: 100,
                data: ['2015', '2016']
            },
            toolbox: {
                show: true,
                feature: {
                    saveAsImage: {
                        show: true,
                        title: "Save Image"
                    }
                }
            },
            calculable: true,
            xAxis: [{
                type: 'value',
                boundaryGap: [0, 0.01]
            }],
            yAxis: [{
                type: 'category',
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            }],
            series: [{
                name: '2015',
                type: 'bar',
                data: [18203, 23489, 29034, 104970, 131744, 630230]
            }, {
                name: '2016',
                type: 'bar',
                data: [19325, 23438, 31000, 121594, 134141, 681807]
            }]
        });

    }

}

$(document).ready(function () {
    init_echarts();
});