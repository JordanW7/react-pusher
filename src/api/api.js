import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:3000");

const subscribeToComments = cb => {
  socket.on("comments", data => cb(null, data));
};

const submitComment = data => {
  console.log("ADDING", data);
  socket.emit("addnewcomment", data);
};

export { subscribeToComments, submitComment };
