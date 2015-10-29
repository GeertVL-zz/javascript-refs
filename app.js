var Rx = require('rx');
var fs = require('fs');

var src = [1, 2, 3, 4, 5];
var upper = src.map(function(name) {
	return name * 2;
});
upper.forEach(function(name) {
	console.log(name);
});

var src2 = Rx.Observable.range(1, 5);
var upper2 = src2.map(function(name) {
	return name * 2;
});

upper2.subscribe(function(name) {
	console.log(name);
});

var avg = Rx.Observable.range(0, 5)
			.reduce(function(prev, cur) {
				return {
					sum: prev.sum + cur,
					count: prev.count + 1
				};
			}, { sum: 0, count: 0})
			.map(function(o) {
				return o.sum / o.count;
			});

var subscription = avg.subscribe(function(x) {
	console.log('Average is: ', x);
});			