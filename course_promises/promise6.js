'use strict';

var promise = new Promise(function(fulfill, reject) {
  reject(new Error("access denied"));
});

promise.catch(console.log);

var p2 = Promise.resolve('access granted');
var p3 = Promise.reject(new Error('rejected by defaul'));

console.log(p2);
console.log(p3);
