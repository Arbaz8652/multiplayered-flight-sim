import { createServer } from "http";
import { Server } from "socket.io";
import app from "./app";

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("joinGame", (gameId) => {
    socket.join(gameId);
    console.log(`User ${socket.id} joined game ${gameId}`);
    io.to(gameId).emit("playerJoined", { playerId: socket.id });
  });

  socket.on("move", (data) => {
    io.to(data.gameId).emit("updatePosition", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
