import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:3000");

const subscribeToComments = cb => {
  socket.on("comments", data => cb(null, data));
  socket.emit("subscribeToComments");
};

const submitComment = data => {
  console.log("ADDING", data);
  socket.on("comments", () => {
    socket.emit(`RECEIVED ${data}`);
  });
};

export { subscribeToComments, submitComment };
