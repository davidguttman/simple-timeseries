Simple Timeseries
=================

A simple timeseries chart using D3.

![Screen Shot](http://i.imgur.com/6WtHvYh.png)

Usage:

```js

var ST = require('simple-timeseries')

var data = [
   [
        1178866800000,  // X: MS since epoch, aka (new Date).valueOf()
        108.74          // Y: "Price" in this case
    ],
    // ...
    [
        1177398000000,
        93.239999999999995
    ]
]
var opts = {
  width: 500,
  height: 300,
  yLabel: 'Price'
}

var st = new ST(data, opts)
document.body.appendChild(st.el)

```

Uses code from http://bl.ocks.org/mbostock/3883245

License
=======

MIT
