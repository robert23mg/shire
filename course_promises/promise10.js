'use strict';

function alwaysThrows(){
  throw new Error("OH NOES");
}

function iterate(count){
  console.log(count);
  return ++count;
}

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null, console.log);
