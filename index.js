require('./style.css')

var d3 = require('d3')

var LineChart = module.exports = function (data, opts) {
  this.el = document.createElement('div')
  this.el.classList.add('st-container')
  this.data = data
  this.opts = opts || {}

  if (this.data[0].length) {
    this.data = [
      {data: this.data}
    ]
  }

  this.init()
}

LineChart.prototype.init = function() {
  var margin = {top: 20, right: 20, bottom: 30, left: 50},
      width = this.opts.width - margin.left - margin.right,
      height = this.opts.height - margin.top - margin.bottom;

  var x = d3.time.scale()
      .range([0, width]);

  var y = d3.scale.linear()
      .range([height, 0]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

  var line = d3.svg.line()
      .x(function(d) { return x(d[0]); })
      .y(function(d) { return y(d[1]); });

  var svg = d3.select(this.el).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  
  this.data.forEach(function(series) {
    series.data.forEach(function(d) {
      d[0] = new Date(d[0]);  
    })
  });

  x.domain([
    d3.min(this.data, function(series) { 
      return d3.min(series.data, function(d) { 
        return d[0] 
      }) 
    }),  
    d3.max(this.data, function(series) { 
      return d3.max(series.data, function(d) { 
        return d[0] 
      }) 
    })
  ]);

  y.domain([
    d3.min(this.data, function(series) { 
      return d3.min(series.data, function(d) { 
        return d[1] 
      }) 
    }),  
    d3.max(this.data, function(series) { 
      return d3.max(series.data, function(d) { 
        return d[1] 
      }) 
    })
  ]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text(this.opts.yLabel);

  this.data.forEach(function(series) {
    svg.append("path")
        .datum(series.data)
        .attr("class", "line")
        .attr("d", line);

  })
  
  
}