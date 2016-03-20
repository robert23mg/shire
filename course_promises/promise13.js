'use strict';

var qhttp = require('q-io/http');

qhttp.read('http://localhost:7000')
    .then(function(pid){
      return qhttp.read('http://localhost:7001/' + pid)
          .then(function(val){
            console.log(JSON.parse(val));
          });
    })
    .then(null, console.log);
