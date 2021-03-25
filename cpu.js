var os = require('os');

console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem())
var os = require('os-utils');

os.cpuUsage(function(v){
    console.log( 'CPU Usage (%): ' + v );
});
