import express from 'express';
import { createServer } from 'http'; // Import createServer from 'http' module
import { Server } from 'socket.io'; // Import Server from 'socket.io' module
import { fileURLToPath } from 'url'; // Import fileURLToPath from 'url' module
import path from 'path'; // Import path module

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // Use path.dirname and fileURLToPath to get the current directory

const app = express();
const server = createServer(app); // Create HTTP server using express app

const port = process.env.PORT || 80;

app.get('/card-options', (req, res) => {
  res.json({
    "standered": 
  });
})

app.use('/', express.static('www/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/www/dist/index.html')); // Use path.join to construct file path
});

server.listen(port, () => {
  console.log('Express server running on port: ' + port);
});

// Attach Socket.IO to the HTTP server
const io = new Server(server);

// Handle connection event
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle disconnection event
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  // Handle custom events
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg); // Broadcast the message to all connected clients
  });
});
