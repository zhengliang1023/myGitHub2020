// pages/mychart/mychart.js
import * as echarts from '../../components/ec-canvas/echarts';
Page({

  /**
   * 页面的初始数据
   */
  data: {
      ec: {
        //onInit: initChart
        onInit: initChart3
      },
      ec2: {
        onInit: initChart2
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})


/*圆形图*/
function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
    series: [{
      label: {
        normal: {
          fontSize: 14
        }
      },
      type: 'pie',
      center: ['50%', '50%'],
      radius: [0, '60%'],
      data: [
        {
          value: 38,
          name: '北京'
        }, {
          value: 20,
          name: '武汉'
        }, {
          value: 10,
          name: '杭州'
        }, {
          value: 20,
          name: '广州'
        }, {
          value: 55,
          name: '上海'
        }]
    }],
  };
  chart.setOption(option);
  return chart;

}

/*曲线图*/
function initChart2(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var option = {
    title: {
      text: '办电趋势',
      /*subtext: '办电趋势1'*/
      left: "2%",
      textStyle: {
        fontSize: 15,
        color: '#FF1493'
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      icon: 'rect',
    	/*itemWidth:14,
    	itemHeight:5,
    	itemGap:13,*/
      data: ['低压', '高压'],
      right: '10%',
      textStyle: {
        fontSize: 15,
        color: '#F0F8FF'
      }
    },
    /*toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
	calculable : true,*/
    //以上为附加文字
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLine: {
        lineStyle: {
          color: '#FFFFFF',
          width: 2,//这里是为了突出显示加上的
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#00BFFF',
          width: 3,//这里是为了突出显示加上的
        }
      },
      splitLine: { show: false } //去掉参考线
    },
    series: [{
      name: '低压',
      data: [300, 600, 900, 300, 600, 400, 700],
      type: 'line',
      //areaStyle: {}, 包括下围
      smooth: false,//平滑
      barWidth: 20,
      itemStyle: {
        normal: {
          color: '#25E1AF',
        }
      },
    },
    //添加多个
    {
      name: '高压',
      data: [900, 300, 500, 700, 300, 400, 900],
      type: 'line',
      //areaStyle: {}, 包括下围
      smooth: false,//平滑
      itemStyle: {
        normal: {
          color: '#7B55FF',
        }
      },
    }
    ]
  };
  chart.setOption(option);
  return chart;
}


/*柱状图*/
function initChart3(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var option = {
    title: {
      text: '注册趋势',
      /* subtext: '办电趋势'*/
      left: '2%',
      textStyle: {
        fontSize: 15,
        color: '#FF1493'
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      icon: 'rect',
    	/*itemWidth:14,
    	itemHeight:5,
    	itemGap:13,*/
      data: ['注册量'],
      right: '10%',
      textStyle: {
        fontSize: 15,
        color: '#F0F8FF'
      }
    },

    //以上为附加内容
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLine: {
        lineStyle: {
          color: '#ffffff',
          width: 2,//这里是为了突出显示加上的
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#00BFFF',
          width: 2,//这里是为了突出显示加上的
        }
      },
      splitLine: { show: false } //去掉参考线
    },
    series: [{
      data: [720, 932, 901, 934, 1290, 1330, 1320],
      type: 'bar',
      //areaStyle: {}, 包括下围
      smooth: true,//平滑
      barWidth: 20,
      itemStyle: {
        normal: {
          //color:'#4ad2ff',
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 0,
            color: "#0084FF" // 0% 处的颜色
          }, {
            offset: 1,
            color: "#39D9FD" // 100% 处的颜色
          }], false),
        }
      },
    },
      //添加多个
      /*{
          data: [950, 952, 751, 954, 1290, 1930, 1320],
          type:'line',
          //areaStyle: {}, 包括下围
          smooth: true,//平滑
      }*/


    ]
  };
  chart.setOption(option);

  return chart;
}