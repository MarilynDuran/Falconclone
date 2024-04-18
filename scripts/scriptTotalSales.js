let monthAxis = [
    ['Jan 1', 'Jan 3', 'Jan 5', 'Jan 7', 'Jan 9', 'Jan 11', 'Jan 13', 'Jan 15', 'Jan 17', 'Jan 19', 'Jan 21', 'Jan 23', 'Jan 25'],
    ['Feb 1', 'Feb 3', 'Feb 5', 'Feb 7', 'Feb 9', 'Feb 11', 'Feb 13', 'Feb 15', 'Feb 17', 'Feb 19', 'Feb 21', 'Feb 23', 'Feb 25'],
    ['Mar 1', 'Mar 3', 'Mar 5', 'Mar 7', 'Mar 9', 'Mar 11', 'Mar 13', 'Mar 15', 'Mar 17', 'Mar 19', 'Mar 21', 'Mar 23', 'Mar 25'],
    ['Apr 1', 'Apr 3', 'Apr 5', 'Apr 7', 'Apr 9', 'Apr 11', 'Apr 13', 'Apr 15', 'Apr 17', 'Apr 19', 'Apr 21', 'Apr 23', 'Apr 25'],
    ['May 1', 'May 3', 'May 5', 'May 7', 'May 9', 'May 11', 'May 13', 'May 15', 'May 17', 'May 19', 'May 21', 'May 23', 'May 25'],
    ['Jun 1', 'Jun 3', 'Jun 5', 'Jun 7', 'Jun 9', 'Jun 11', 'Jun 13', 'Jun 15', 'Jun 17', 'Jun 19', 'Jun 21', 'Jun 23', 'Jun 25'],
    ['Jul 1', 'Jul 3', 'Jul 5', 'Jul 7', 'Jul 9', 'Jul 11', 'Jul 13', 'Jul 15', 'Jul 17', 'Jul 19', 'Jul 21', 'Jul 23', 'Jul 25'],
    ['Aug 1', 'Aug 3', 'Aug 5', 'Aug 7', 'Aug 9', 'Aug 11', 'Aug 13', 'Aug 15', 'Aug 17', 'Aug 19', 'Aug 21', 'Aug 23', 'Aug 25'],
    ['Sep 1', 'Sep 3', 'Sep 5', 'Sep 7', 'Sep 9', 'Sep 11', 'Sep 13', 'Sep 15', 'Sep 17', 'Sep 19', 'Sep 21', 'Sep 23', 'Sep 25'],
    ['Oct 1', 'Oct 3', 'Oct 5', 'Oct 7', 'Oct 9', 'Oct 11', 'Oct 13', 'Oct 15', 'Oct 17', 'Oct 19', 'Oct 21', 'Oct 23', 'Oct 25'],
    ['Nov 1', 'Nov 3', 'Nov 5', 'Nov 7', 'Nov 9', 'Nov 11', 'Nov 13', 'Nov 15', 'Nov 17', 'Nov 19', 'Nov 21', 'Nov 23', 'Nov 25'],
    ['Dec 1', 'Dec 3', 'Dec 5', 'Dec 7', 'Dec 9', 'Dec 11', 'Dec 13', 'Dec 15', 'Dec 17', 'Dec 19', 'Dec 21', 'Dec 23', 'Dec 25']
];

let monthData = [
    [100, 70, 80, 50, 120, 100, 130, 140, 90, 100, 40, 50, 60],
    [80, 50, 60, 40, 60, 120, 100, 130, 60, 80, 50, 60, 70],
    [70, 80, 100, 70, 90, 60, 80, 130, 40, 60, 50, 80, 90],
    [90, 40, 80, 80, 100, 140, 100, 130, 90, 60, 70, 50, 60],
    [80, 60, 80, 60, 40, 100, 120, 100, 30, 40, 30, 70, 80],
    [20, 40, 20, 50, 70, 60, 110, 80, 90, 30, 50, 50, 60],
    [60, 70, 30, 40, 80, 140, 80, 140, 120, 130, 100, 110, 120],
    [90, 90, 40, 60, 40, 110, 90, 110, 60, 80, 60, 70, 80],
    [50, 80, 50, 80, 50, 80, 120, 80, 50, 120, 110, 110, 120],
    [60, 90, 60, 70, 40, 70, 100, 140, 30, 40, 30, 70, 180],
    [20, 40, 20, 50, 30, 80, 120, 100, 30, 40, 30, 70, 80]
];

let currentAxis = monthAxis[0];
let currentData = monthData[0];
let currentMonth = 7 //Aqui tiene que ir el value del select

function changeTotalSalesMonth(choosenMonth){
    currentAxis = monthAxis[choosenMonth];
    currentData = monthData[choosenMonth];
};

changeTotalSalesMonth(currentMonth)

var dom = document.getElementById('container');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};
    
var option;

option = {
    xAxis: {
        type: 'category',
        data: currentAxis
    },
    yAxis: {
        type: 'value'
    },
    grid:{
        width: '100%',
        height: '70%'
    },
    series: [
    {
        data: currentData,
        type: 'line'
    }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);