import { createClient } from 'redis';

console.log('Starting Redis subscriber script...');

const subscriber = createClient({
  socket: {
    host: '127.0.0.1',
    port: 6379,
  },
});

subscriber.on('connect', () => {
  console.log('Redis client connected to the server');
});

subscriber.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err.message}`);
});

subscriber.connect();

subscriber.subscribe('ALXchannel', (message) => {
  console.log(message);
  if (message === 'KILL_SERVER') {
    subscriber.unsubscribe('ALXchannel');
    subscriber.quit();
    console.log('Redis client connection closed');
  }
});
