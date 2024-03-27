// You can directly access DOM elements without importing them in browser environment
var chartDom = document.getElementById('weekly-chart');
var myChart = echarts.init(chartDom);

var option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    splitLine: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },
  grid: {
    show: false
  },
  series: [
    {
      data: [6000, 10000, 7500, 4000, 3500, 5500, 6000],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      },
      barWidth: 5,
      itemStyle: {
        barBorderRadius: [5, 5, 5, 5],
        
      },
    }
  ]
};

// Check if option is defined before setting it
if (option) {
  myChart.setOption(option);
}
