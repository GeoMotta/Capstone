$(document).ready(function () {
    // Use a "/test" namespace.
    // An application can open a connection on multiple namespaces, and
    // Socket.IO will multiplex all those connections on a single
    // physical channel. If you don't care about multiple channels, you
    // can set the namespace to an empty string.
    namespace = '/test';

    // Connect to the Socket.IO server.
    var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port + namespace);

    // Event handler for new connections.
    // The callback function is invoked when a connection with the
    // server is established.
    socket.on('connect', function () {
        socket.emit('my_event', { data: 'I\'m connected!' });
    });


    socket.on('dash_data', function (msg) {
        $('#gdata').text(msg.data);
        $('#required_temp').text(msg.required_temp);
    });

    // Gauge themes
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

    //temperature gauge
    if ($('#temp_gauge').length) {
        var tempGauge = echarts.init(document.getElementById('temp_gauge'), theme);
        option = {
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
                        value: 0,
                        name: 'Temperature'
                    }]
                }
            ]
        };

        socket.on('curr_data', function (msg) {
            option.series[0].data[0].value = msg.temp;
            tempGauge.setOption(option, true);
        });
    }


    //humidity_gauge
    if ($('#humidity_gauge').length) {
        var humidityGauge = echarts.init(document.getElementById('humidity_gauge'), theme);
        option = {
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
                        value: 0,
                        name: 'Humidity'
                    }]
                }
            ]
        };

        socket.on('curr_data', function (msg) {
            option.series[0].data[0].value = msg.hum;
            humidityGauge.setOption(option, true);
            
            $('#light_intensity').text(msg.light);
        });
    }


});