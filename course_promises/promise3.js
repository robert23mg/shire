'use strict';

var promise = new Promise(function(fullfill, reject) {
  //solution
  setTimeout(function() {
    reject(new Error("REJECTED!"));
  }, 300);
});

function onReject(error) {
  console.log(error.message);
}

promise.then(console.log, onReject);
