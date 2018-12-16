/**
 * Created by Burak on 16.12.2018.
 */
const http = require('http');
const socketio = require('socket.io');
const server = http.createServer((req,res)=>{
  res.end('NameSpace');
});

server.listen(3000);

const io = socketio.listen(server);
const nsp = io.of('/namespace');

nsp.on('connection',(socket)=>{
console.log('user connected');

  socket.on('isimyaz',()=>{
    nsp.emit('gonder',{name : 'Serverdan Gelen Burak :))'});
  });

});
