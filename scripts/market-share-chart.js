var chartDom = document.getElementById('mk-shr-chart');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center',
    show: false,
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['90%', '100%'],
      avoidLabelOverlap: false,
      padAngle: 5,
      label: {
        show: false,
        position: 'center'
      },
      setOption: {
        animation: false,
      },
      /* emphasis: {
        label: {
          show: false,
          fontSize: 40,
          fontWeight: 'bold'
        }
      }, */
      labelLine: {
        show: false
      },
      data: [
        { value: 58, name: 'Samsung' },
        { value: 21, name: 'Direct' },
        { value: 22, name: 'Email' },
      ]
    }
  ]
};

option && myChart.setOption(option);