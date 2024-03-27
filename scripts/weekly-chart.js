// Obtener el contenedor de la gráfica
var chartDom = document.getElementById('weekly-chart');
var myChart = echarts.init(chartDom);

// Datos para la gráfica
var data = [6000, 10000, 7500, 4000, 3500, 5500, 6000];
var xAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Configuración de la gráfica
var option = {
  xAxis: {
    type: 'category',
    data: xAxisData,
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
      data: data,
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

// Establecer la configuración de la gráfica
myChart.setOption(option);

// Obtener las coordenadas del contenedor de la gráfica
var chartOffset = chartDom.getBoundingClientRect();
var chartLeft = chartOffset.left;
var chartTop = chartOffset.top;

// Mostrar valor al pasar el ratón sobre la gráfica
myChart.on('mousemove', function(params) {
  var dataIndex = params.dataIndex;
  var value = data[dataIndex];
  var xAxisValue = xAxisData[dataIndex];

  // Crear un tooltip con el valor
  var tooltip = document.createElement('div');
  tooltip.innerHTML = xAxisValue + ': ' + value;
  tooltip.style.position = 'fixed'; // Cambiar a posición fija
  tooltip.style.left = chartLeft + myChart.getWidth() / 2 + 'px'; // Posicionar en el centro horizontal de la gráfica
  tooltip.style.top = chartTop - 40 + 'px'; // Posicionar encima de la gráfica
  tooltip.style.transform = 'translateX(-50%)'; // Centrar horizontalmente
  tooltip.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  tooltip.style.padding = '5px';
  tooltip.style.borderRadius = '5px';
  tooltip.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.2)';
  tooltip.style.zIndex = '999';

  // Agregar el tooltip al cuerpo del documento
  document.body.appendChild(tooltip);

  // Eliminar el tooltip después de un tiempo
  setTimeout(function() {
    tooltip.remove();
  }, 500);
});

// Ocultar tooltip al salir de la gráfica
myChart.on('mouseout', function() {
  var tooltips = document.querySelectorAll('.chart-tooltip');
  tooltips.forEach(function(tooltip) {
    tooltip.remove();
  });
});
