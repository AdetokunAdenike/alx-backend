const { createClient } = require('redis');

// Create and connect the Redis client
const client = createClient();

client.on('connect', () => {
  console.log('Connected to Redis');
});

client.on('error', (err) => {
  console.error('Error connecting to Redis:', err);
});


async function run() {
  try {

    await client.connect();

    await client.set('ALX', 'School');
    console.log('Set ALX to School');

    const value = await client.get('ALX');
    console.log('The value of ALX is:', value);
  } catch (err) {
    console.error('Error interacting with Redis:', err);
  } finally {

    await client.quit();
  }
}

run();
