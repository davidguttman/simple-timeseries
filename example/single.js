var SimpleTimeseries = require('../')

var data = require('./single.json')
var opts = {
  width: 500,
  height: 300,
  yLabel: 'Price'
}

var simpleTimeseries = new SimpleTimeseries(data, opts)
document.body.appendChild(simpleTimeseries.el)