var app = require ('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});

io.on('connection', function (socket) {
    console.log('user connected');

    io.on('chat message', function (msg) {
        io.emit('chat message',msg);
        console.log('chat message', msg);
    })
});

app.listen(3000,function(){
    console.log('App listening on port 3000: go to"http://localhost:3000" ')
});