/**
 * Created by Burak on 16.12.2018.
 */
const http = require('http');
const socketio = require('socket.io');
const server = http.createServer((req,res)=>{
  res.end('test');
});

server.listen(3000);

const io = socketio.listen(server);

  io.sockets.on('connection',(socket)=>{
  console.log("Kullanıcı bağlandı");

  setInterval(()=>{
    socket.emit('merhabade',{country:'Türkiye'});
  },1000);

  socket.on('selamver',(data)=>{
    console.log(data);
  });

  socket.on('disconnect',()=>{
    console.log('Kullanıcı Ayrıldı.');
  });

});