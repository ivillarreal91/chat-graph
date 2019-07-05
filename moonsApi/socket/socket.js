const connection = (server) => {
  const io = require("socket.io")(server);
  io.on('connection', (socket) => {
    console.log('New user connected')

    socket.username = "Anonymous"

    socket.on('change_username', (data) => {
      console.log(data);
      socket.username = data.username
    })

    socket.on('new_message', (data) => {
      console.log(data);
      io.sockets.emit('new_message', {
        message: data.message,
        username: socket.username
      });
    })
  })
};

module.exports.getConnection = connection;