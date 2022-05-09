const express = require('express');
const socket = require('socket.io');

const app = express();
const port = process.env.PORT || 3000
const server = app.listen(port, function(){
  console.log(`Aplicacion a la escucha del puerto ${port}`);
});

app.use(express.static('./'));

var io = socket(server);

io.on('connection', function(socket){
  console.log("Hay conexion de un socket");
  socket.join("room1");

  socket.on('endmatch', function(data){
    io.to("room1").emit('endmatch', data);
  });

  // socket.on('escribiendo', function(data){
  //   socket.broadcast.emit('escribiendo', data);
  // });
});