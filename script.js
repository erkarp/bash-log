var fs = require('fs'),
    data = require('./log.json');

var message = '';
message = process.argv.slice(2);
message = message.join(' ');
console.log('message: ', message);

data.push({
  message: message
});

var msg = JSON.stringify(data);
fs.writeFile('log.json', msg);
