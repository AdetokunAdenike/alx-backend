import { createClient, print } from 'redis';

console.log('Starting Redis client script...');

const client = createClient({
  socket: {
    host: '127.0.0.1',
    port: 6379,
  },
});

console.log('Redis client created, attempting connection...');

client.on('connect', () => {
  console.log('Redis client connected to the server');

  (async () => {
    console.log('Starting Redis operations...');
    try {
      await displaySchoolValue('ALX');
      setNewSchool('ALXSanFrancisco', '100');
      await displaySchoolValue('ALXSanFrancisco');
    } catch (err) {
      console.error(`Error during Redis operations: ${err.message}`);
    } finally {
      client.quit();
      console.log('Redis client connection closed');
    }
  })();
});

client.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err.message}`);
});

async function displaySchoolValue(schoolName) {
  console.log(`Fetching value for key: "${schoolName}"`);
  try {
    const value = await client.get(schoolName); // No need to promisify
    console.log(`Value for "${schoolName}": ${value}`);
  } catch (err) {
    console.error(`Error fetching value for "${schoolName}": ${err.message}`);
  }
}

function setNewSchool(schoolName, value) {
  console.log(`Setting key "${schoolName}" with value "${value}"`);
  client.set(schoolName, value, print);
}

// Explicitly connect the client
(async () => {
  try {
    await client.connect();
    console.log('Client explicitly connected via Promise.');
  } catch (err) {
    console.error(`Error during explicit connection: ${err.message}`);
  }
})();
