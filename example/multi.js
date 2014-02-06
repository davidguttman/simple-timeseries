var SimpleTimeseries = require('../')

var data = require('./multi.json')

var opts = {
  width: 500,
  height: 300,
  yLabel: 'Temp'
}

var simpleTimeSeries = new SimpleTimeseries(data, opts)
document.body.appendChild(simpleTimeSeries.el)