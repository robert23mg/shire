'use strict';

function parsePromise(json) {
  return new Promise(function(fulfill, reject) {
    try{
      fulfill(JSON.parse(json));
    }catch(e){
      reject(e);
    };
  });
}

parsePromise(process.argv[2]).then(parsePromise).then(null, console.log);
