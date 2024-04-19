var chartDom = document.getElementById('total-order-chart');
var myChart = echarts.init(chartDom);

var option = {
  xAxis: {
    type: 'category',
    data: ['Week 4', 'Week 5'],
    splitLine: {
      show: false
    },
    axisLabel: {
      show: false
    },
    grid: {
      show: false
    },
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: false
    },
    axisLabel: {
      show: false
    },
    grid: {
      show: false
    },
  },
  series: [
    {
      data: [150, 434],
      type: 'line',
      smooth: true,
    }
  ]
};

option && myChart.setOption(option);