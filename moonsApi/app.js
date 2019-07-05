const express = require('express');
const socket = require('./socket/socket');

const app = express();

const port = 1234;

const server = app.listen(port, () => {
	console.log('Server is up and running on port numner ' + port);
});

socket.getConnection(server);