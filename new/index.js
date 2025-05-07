const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const socketIo = require('socket.io');
const mqtt = require('mqtt');
const mysql = require('mysql2');

// MQTT Configuration
const broker = 'mqtt://broker.emqx.io';
const topicSensor = 'monitoring/temperature';
const mqttOptions = { reconnectPeriod: 1000, username: '', password: '' };
const mqttClient = mqtt.connect(broker, mqttOptions);

// MySQL Database Configuration
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sensor_data_iot',
}).promise();

// Express and Socket.IO Setup
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/test', (req, res) => {
  res.json({ message: 'Test route works!' });
});

// Endpoint to Send Messages
app.post('/send-message', (req, res) => {
  const message = req.body.message; // Get message from request body
  io.emit('message', message); // Send message to all clients
  res.json({ status: 'success', message: 'Message sent to clients' });
});

io.on('connection', (socket) => {
  console.log('New client connected');
  
  // Emit a test message
  socket.emit('message', 'hello');
  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// MQTT Client Setup
mqttClient.on('connect', () => {
  console.log('Connected to MQTT broker');
  mqttClient.subscribe(topicSensor, (err) => {
    if (err) {
      console.error('Subscription error:', err);
    } else {
      console.log(Subscribed to topic: ${topicSensor});
    }
  });
});

mqttClient.on('message', (topic, message) => {
  if (topic === topicSensor) {
    const newSensorData = message.toString();
    io.emit('message', newSensorData); // Fixed extra parenthesis
    console.log(Received: ${newSensorData}); // Fixed mismatched quotes
  }
});

mqttClient.on('reconnect', () => {
  console.log('Reconnecting to MQTT broker...');
});

mqttClient.on('offline', () => {
  console.log('MQTT client offline');
});

mqttClient.on('error', (err) => {
  console.error('MQTT error:', err);
});

// MySQL Database Test Function
async function testDatabase() {
  try {
    // Get current time from the database
    const [now] = await db.query('SELECT NOW() AS now');
    console.log('Current time from database:', now[0].now);

    // Get recent sensor data from the database
    const [rows] = await db.query('SELECT * FROM sensor_data ORDER BY timestamp DESC LIMIT 10');
    console.log('Recent sensor data:', rows);
  } catch (err) {
    console.error('Database error:', err);
  }
}

// Run the database test function
testDatabase();

// Start the Express Server
const PORT = 3002;
server.listen(PORT, () => {
  console.log(Express server running on port ${PORT});
});
