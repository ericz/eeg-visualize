var serialport = require("serialport");
var SerialPort = serialport.SerialPort; 
var sp = new SerialPort("COM4", { 
  parser: serialport.parsers.readline("\n") 
});

var express = require('express');
var BinaryJS = require('binaryjs');

var BinaryServer = require('binaryjs').BinaryServer;
var fs = require('fs');

// Start Binary.js server
var server = BinaryServer({port: 9000});
// Wait for new user connections
server.on('connection', function(client){
  var stream = client.createStream();
  stream.on('error', function(){
    console.log(arguments);
  });
  client.on('close', function(){
    clearInterval(client.interval);
  });
  sp.on("data", function (data) {
    stream.write(data/1023 * 5);
    //console.log(data/1023 * 5);
  });
});






var app = express();
app.use(express.static(__dirname + '/public'));
app.listen(80);

