import { createClient } from 'redis';

console.log('Starting Redis client script...');

const client = createClient({
  socket: {
    host: '127.0.0.1',
    port: 6379,
  },
});

async function main() {
  try {
    console.log('Connecting to Redis...');
    await client.connect();
    console.log('Connected to Redis server.');

    console.log('Creating hash "ALX"...');
    await client.hSet('ALX', 'Portland', '50');
    await client.hSet('ALX', 'Seattle', '80');
    await client.hSet('ALX', 'New York', '20');
    await client.hSet('ALX', 'Bogota', '20');
    await client.hSet('ALX', 'Cali', '40');
    await client.hSet('ALX', 'Paris', '2');
    console.log('Hash created.');

    console.log('Fetching hash "ALX"...');
    const result = await client.hGetAll('ALX');
    console.log('Hash retrieved:', result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  } finally {
    await client.quit();
    console.log('Redis client connection closed.');
  }
}

main();
