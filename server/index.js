const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.sockets.on("connection", socket => {
  console.log("socketconnected", socket.id);
  // code here is alive as long as the socket session is alive
  socket.on("message", userMessage => {
    const { username, message } = userMessage;
    io.emit("message", `${username} | ${message}`);
  });
});

const PORT = 4000;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
