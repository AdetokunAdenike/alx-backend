import { createClient } from 'redis';

console.log('Starting Redis client script...');

const client = createClient({
  url: 'redis://127.0.0.1:6379',
});

console.log('Redis client created...');

(async () => {
  try {
    await client.connect();
    console.log('Redis client connected to the server');

    await client.set('test_key', 'test_value');
    const value = await client.get('test_key');
    console.log(`Value for test_key: ${value}`);

    await client.quit();
    console.log('Redis client connection closed');
  } catch (err) {
    console.log(`Redis client not connected to the server: ${err.message}`);
  }
})();
