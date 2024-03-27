var chartDom = document.getElementById('total-order-chart');
var myChart = echarts.init(chartDom);

var option = {
  xAxis: {
    type: 'category',
    data: ['Week 4', 'Week 5']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [15000, 43400],
      type: 'line',
      smooth: true,
    }
  ]
};

option && myChart.setOption(option);
