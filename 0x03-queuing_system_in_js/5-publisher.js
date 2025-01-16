import { createClient } from 'redis';

console.log('Starting Redis publisher script...');

const publisher = createClient({
  socket: {
    host: '127.0.0.1',
    port: 6379,
  },
});

publisher.on('connect', () => {
  console.log('Redis client connected to the server');
});

publisher.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err.message}`);
});

publisher.connect();

function publishMessage(message, time) {
  setTimeout(() => {
    console.log(`About to send ${message}`);
    publisher.publish('ALXchannel', message);
  }, time);
}

publishMessage('ALX Student #1 starts course', 100);
publishMessage('ALX Student #2 starts course', 200);
publishMessage('KILL_SERVER', 300);
publishMessage('ALX Student #3 starts course', 400);
