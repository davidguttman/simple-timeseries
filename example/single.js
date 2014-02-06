var LineChart = require('../')

var data = require('./single.json')
var opts = {
  width: 500,
  height: 300,
  yLabel: 'Price'
}

var lineChart = new LineChart(data, opts)
document.body.appendChild(lineChart.el)